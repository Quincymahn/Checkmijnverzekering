// app/api/submit-form/route.js

import mysql from "mysql2/promise";
import { google } from "googleapis";

export async function POST(request) {
  const formData = await request.json();

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };

  let connection;

  try {
    // ==========================================================
    // STAP 1: Data opslaan in MySQL en de nieuwe ID ophalen
    // ==========================================================
    console.log("Poging tot verbinden met MySQL database...");
    connection = await mysql.createConnection(dbConfig);

    const mysqlQuery = `
      INSERT INTO subscribers (
        form_name, voornaam, achternaam, postcode, huisnummer, telefoonnummer, email, reden_aanvraag, opmerking
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const mysqlValues = [
      "Checkmijnverzekering",
      formData.firstName || null,
      formData.lastName || null,
      formData.postcode || null,
      formData.huisnummer || null,
      formData.phone || null,
      formData.email || null,
      formData.wens || null,
      formData.opmerking || null,
    ];

    // --- WIJZIGING: Vang het resultaat van de query op ---
    const [result] = await connection.execute(mysqlQuery, mysqlValues);
    const insertedId = result.insertId; // Dit is de auto-gegenereerde ID

    console.log(`Data succesvol opgeslagen in MySQL met ID: ${insertedId}.`);

    // Controleer of er een ID is aangemaakt
    if (!insertedId) {
      throw new Error("Kon geen ID verkrijgen van de database na insert.");
    }

    // ==========================================================
    // STAP 2: Data, inclusief de nieuwe ID, toevoegen aan Google Sheet
    // ==========================================================
    console.log("Poging tot versturen naar Google Sheets...");
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const currentDate = new Date().toLocaleString("nl-NL", {
      timeZone: "Europe/Amsterdam",
    });

    // --- WIJZIGING: Voeg de 'insertedId' toe aan de data voor de spreadsheet ---
    // We plaatsen de ID in de derde kolom, zoals in het oorspronkelijke script.
    const sheetRowData = [
      formData.wens || "",
      "Checkmijnverzekering.nl",
      insertedId, // <-- HIER STAAT DE ID NU
      "",
      formData.firstName || "",
      "",
      formData.lastName || "",
      formData.phone || "",
      formData.email || "",
      formData.huisnummer || "",
      formData.postcode || "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      formData.opmerking || "",
      currentDate,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [sheetRowData],
      },
    });
    console.log(
      `Data (incl. ID ${insertedId}) succesvol toegevoegd aan Google Sheet.`
    );

    // ==========================================================
    // STAP 3: Afronden
    // ==========================================================
    await connection.end();

    return Response.json({
      success: true,
      message: "Formulier succesvol verwerkt en opgeslagen.",
    });
  } catch (error) {
    console.error("Fout bij verwerken formulier:", error);

    if (connection) {
      await connection.end();
    }

    return Response.json(
      {
        success: false,
        message: "Er is een fout opgetreden bij het verwerken van uw aanvraag.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
