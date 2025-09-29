// app/api/upload-file/route.js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return Response.json(
        { success: false, error: "Geen bestand gevonden" },
        { status: 400 }
      );
    }

    // Optionele log om te zien wat de browser verstuurt
    console.log("Bestand ontvangen op server:", {
      name: file.name,
      type: file.type,
    });

    // ==========================================================
    // --- WIJZIGING START: Robuuste controle op type ÉN bestandsnaam ---
    // ==========================================================

    let resourceType = "image";
    const fileName = file.name || "";

    // Controleer ZOWEL het MIME-type ALS de extensie van de bestandsnaam.
    if (
      file.type === "application/pdf" ||
      fileName.toLowerCase().endsWith(".pdf")
    ) {
      resourceType = "raw";
    }

    // ==========================================================
    // --- WIJZIGING EINDE ---
    // ==========================================================

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: resourceType, // Gebruik de robuust bepaalde resourceType
          folder: "polis-bladen",
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(new Error("Cloudinary upload failed"));
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    if (!result || !result.secure_url) {
      throw new Error(
        "Upload geslaagd, maar geen URL ontvangen van Cloudinary."
      );
    }

    return Response.json({
      success: true,
      url: result.secure_url,
    });
  } catch (error) {
    console.error("Volledige fout in API-route:", error);
    return Response.json(
      { success: false, error: "Interne serverfout bij het uploaden." },
      { status: 500 }
    );
  }
}
