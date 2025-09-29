import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { postcode, housenumber, houseNumberAddition } = await request.json();

    if (!postcode || !housenumber) {
      return NextResponse.json(
        { error: "Postcode en huisnummer zijn verplicht." },
        { status: 400 }
      );
    }

    if (
      !process.env.POSTCODE_NL_PUBLIC_KEY ||
      !process.env.POSTCODE_NL_SECRET_KEY
    ) {
      console.error(
        "Fout: API-credentials voor postcode.eu zijn niet ingesteld"
      );
      return NextResponse.json(
        { error: "Serverconfiguratiefout." },
        { status: 500 }
      );
    }

    const cleanPostcode = postcode.replace(/\s+/g, "").toUpperCase();
    const cleanHousenumber = String(housenumber).trim();

    let apiUrl = `https://api.postcode.eu/nl/v1/addresses/postcode/${cleanPostcode}/${encodeURIComponent(
      cleanHousenumber
    )}`;
    if (houseNumberAddition && String(houseNumberAddition).trim() !== "") {
      apiUrl += `/${encodeURIComponent(String(houseNumberAddition).trim())}`;
    }

    const apiKey = process.env.POSTCODE_NL_PUBLIC_KEY;
    const apiSecret = process.env.POSTCODE_NL_SECRET_KEY;

    const authString = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Basic ${authString}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Deze postcode-huisnummer combinatie is niet gevonden." },
          { status: 404 }
        );
      }
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Authenticatie met de adres-API is mislukt." },
          { status: 401 }
        );
      }
      return NextResponse.json(
        { error: "Er is een fout opgetreden bij het ophalen van het adres" },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.street || !data.city) {
      return NextResponse.json(
        { error: "Onvolledige adresgegevens ontvangen van de API." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      street: data.street,
      city: data.city,
      postcode: data.postcode,
      housenumber: data.houseNumber,
      houseNumberAddition: data.houseNumberAddition || "",
    });
  } catch (error) {
    console.error("Interne serverfout in /api/postcode:", error);
    return NextResponse.json(
      {
        error:
          "Het ophalen van de adresgegevens is mislukt. probeer het opnieuw.",
      },
      { status: 500 }
    );
  }
}
