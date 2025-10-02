// app/api/submit-form/route.js

import mysql from "mysql2/promise";
import { google } from "googleapis";

export async function POST(request) {
  const formData = await request.json();

  // ==========================================================
  // STAP 0: reCAPTCHA Verificatie
  // ==========================================================
  const { recaptchaToken, ...actualFormData } = formData;

  try {
    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaResult = await recaptchaResponse.json();

    console.log("reCAPTCHA result:", {
      success: recaptchaResult.success,
      score: recaptchaResult.score,
      action: recaptchaResult.action,
    });

    // Check if reCAPTCHA verification was successful
    if (!recaptchaResult.success) {
      console.error(
        "reCAPTCHA verificatie mislukt:",
        recaptchaResult["error-codes"]
      );
      return Response.json(
        {
          success: false,
          message: "Beveiligingscontrole mislukt. Probeer het opnieuw.",
        },
        { status: 400 }
      );
    }

    if (recaptchaResult.action !== "submit_form") {
      console.warn("reCAPTCHA action mismatch:", recaptchaResult.action);
      return Response.json(
        {
          success: false,
          message: "Beveiligingsactie ongeldig.",
        },
        { status: 400 }
      );
    }

    // Check reCAPTCHA score (v3 provides a score from 0.0 to 1.0)
    // 0.0 is very likely a bot, 1.0 is very likely a human
    // You can adjust this threshold based on your needs (0.3 - 0.7 is common)
    if (recaptchaResult.score < 0.5) {
      console.warn("Lage reCAPTCHA score gedetecteerd:", recaptchaResult.score);
      return Response.json(
        {
          success: false,
          message:
            "Verdachte activiteit gedetecteerd. Neem contact op met support als u denkt dat dit een fout is.",
        },
        { status: 400 }
      );
    }

    console.log(
      "✓ reCAPTCHA verificatie geslaagd met score:",
      recaptchaResult.score
    );
  } catch (error) {
    console.error("reCAPTCHA verificatie fout:", error);
    return Response.json(
      {
        success: false,
        message:
          "Beveiligingscontrole kon niet worden uitgevoerd. Probeer het later opnieuw.",
      },
      { status: 500 }
    );
  }

  // ==========================================================
  // Ga verder met de originele logica met actualFormData
  // ==========================================================

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };

  let connection;

  try {
    const { polisFileUrl, wens, opmerking } = actualFormData;

    const parts = [];

    // 'Wens' wordt toegevoegd als het aanwezig is
    // wens is nu een array, dus we joinen ze met komma's
    if (wens && Array.isArray(wens) && wens.length > 0) {
      parts.push(`Wens: ${wens.join(", ")}`);
    }

    // Als er een vrije opmerking is, voeg die toe
    if (opmerking) {
      parts.push(`Opmerking: ${opmerking}`);
    }

    // Als er een polisbestand-url is, voeg die toe met label
    if (polisFileUrl) {
      parts.push(`Polisblad: ${polisFileUrl}`);
    }

    const sheetOpmerkingen = parts.length > 0 ? parts.join(" | ") : "";

    // 1b. Maak een string voor de database (alleen de wens/verzekeringen)
    // Voor de database slaan we het op als comma-separated string
    const databaseWens =
      wens && Array.isArray(wens) && wens.length > 0 ? wens.join(", ") : null;

    // 2. Maak een gecombineerd adres voor de spreadsheet
    const sheetAdres = [
      actualFormData.street,
      actualFormData.huisnummer,
      actualFormData.huisnummerToevoeging,
    ]
      .filter(Boolean)
      .join(" ")
      .trim();

    // ==========================================================
    // STAP 1: Data opslaan in MySQL en de nieuwe ID ophalen
    // ==========================================================
    console.log("Poging tot verbinden met MySQL database...");
    connection = await mysql.createConnection(dbConfig);

    const mysqlQuery = `
      INSERT INTO subscribers (
        form_name, voornaam, achternaam, postcode, huisnummer, straat, plaats, 
        telefoonnummer, email, reden_aanvraag, opmerking
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const mysqlValues = [
      "Checkmijnverzekering",
      actualFormData.firstName || null,
      actualFormData.lastName || null,
      actualFormData.postcode || null,
      actualFormData.huisnummer || null,
      actualFormData.street || null,
      actualFormData.city || null,
      actualFormData.phone || null,
      actualFormData.email || null,
      databaseWens, // 'reden_aanvraag' is nu null in MySQL
      actualFormData.opmerking || null,
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

    const sheetRowData = [
      "Verzekering",
      "Checkmijnverzekering.nl",
      insertedId,
      "", // Kolom D
      actualFormData.firstName || "",
      "", // Kolom F
      actualFormData.lastName || "",
      actualFormData.phone || "",
      actualFormData.email || "",
      sheetAdres || "", // Adres: straat + huisnr (kolom L)
      actualFormData.postcode || "", // Postcode (kolom K)
      actualFormData.city || "", // Woonplaats (kolom M)
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
        message: "Er is een fout opgetreden bij het verwerken van uw aanvraag.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
