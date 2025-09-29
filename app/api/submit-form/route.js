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
    // --- Data voorbereiden ---
    // ==========================================================

    // 1. Maak een aparte opmerking voor de spreadsheet (incl. polis link)
    const { polisFileUrl, opmerking } = formData;
    let sheetOpmerkingen = opmerking || "";
    if (polisFileUrl) {
      const linkText = `Polisblad: ${polisFileUrl}`;
      sheetOpmerkingen = sheetOpmerkingen
        ? `${sheetOpmerkingen} | ${linkText}`
        : linkText;
    }

    // 2. Maak een gecombineerd adres voor de spreadsheet
    const sheetAdres = [
      formData.street,
      formData.huisnummer,
      formData.huisnummerToevoeging,
    ]
      .filter(Boolean)
      .join(" ")
      .trim();

    // ==========================================================
    // STAP 1: Data opslaan in MySQL en de nieuwe ID ophalen
    // ==========================================================
    console.log("Poging tot verbinden met MySQL database...");
    connection = await mysql.createConnection(dbConfig);

    // --- WIJZIGING: Voeg 'straat' en 'plaats' toe aan de query ---
    const mysqlQuery = `
      INSERT INTO subscribers (
        form_name, voornaam, achternaam, postcode, huisnummer, straat, plaats, 
        telefoonnummer, email, reden_aanvraag, opmerking
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const mysqlValues = [
      "Checkmijnverzekering",
      formData.firstName || null,
      formData.lastName || null,
      formData.postcode || null,
      formData.huisnummer || null,
      formData.street || null, // <-- NIEUW
      formData.city || null, // <-- NIEUW
      formData.phone || null,
      formData.email || null,
      formData.wens || null,
      formData.opmerking || null, // De originele opmerking zonder link
    ];

    const [result] = await connection.execute(mysqlQuery, mysqlValues);
    const insertedId = result.insertId;

    console.log(`Data succesvol opgeslagen in MySQL met ID: ${insertedId}.`);

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

    // --- WIJZIGING: Vul 'Adres' en 'Woonplaats' in de sheet data ---
    const sheetRowData = [
      formData.wens || "",
      "Checkmijnverzekering.nl",
      insertedId,
      "", // Kolom D
      formData.firstName || "",
      "", // Kolom F
      formData.lastName || "",
      formData.phone || "",
      formData.email || "",
      sheetAdres || "", // Adres: straat + huisnr (kolom L) <-- NIEUW
      formData.postcode || "", // Postcode (kolom K)
      formData.city || "", // Woonplaats (kolom M) <-- NIEUW
      "", // Kolom N
      "", // Kolom O
      "", // Kolom P
      "", // Kolom Q
      "", // Kolom R
      "", // Kolom S
      "", // Kolom T
      "", // Kolom U
      "", // Kolom V
      "", // Kolom W
      "", // Kolom X
      "", // Kolom Y
      "", // Kolom Z
      "", // Kolom AA
      "", // Kolom AB
      "",
      sheetOpmerkingen || "", // De gecombineerde opmerking (kolom AC)
      currentDate, // Datum (kolom AD)
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
        message: "Er is een fout opgereden bij het verwerken van uw aanvraag.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
