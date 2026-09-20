import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      return NextResponse.json(
        { error: "Configuration Brevo manquante." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          listIds: [5],
          updateEnabled: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();

      return NextResponse.json(
        {
          error: "Impossible d'enregistrer l'inscription.",
          details: errorData,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inscription réussie.",
    });
  } catch {
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
