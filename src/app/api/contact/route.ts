import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, campaignType, zone, period, budget, message } = body;

    // Validate required fields
    if (!name || !email || !campaignType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!resend) {
      console.log("No RESEND_API_KEY configured, logging email instead:");
      console.log({ name, email, company, campaignType, zone, period, budget, message });
      return NextResponse.json({
        success: true,
        testMode: true,
        message: "Email logged in console (no API key configured)"
      });
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@mediahubcampus.com",
      to: (process.env.CONTACT_EMAILS || "alfred@mediahubcampus.com").split(",").map(e => e.trim()),
      replyTo: email,
      subject: `Nouveau contact: ${name} — ${campaignType}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Entreprise:</strong> ${company || "Non renseigné"}</p>
        <p><strong>Type de campagne:</strong> ${campaignType}</p>
        <p><strong>Zone(s) visée(s):</strong> ${zone || "Non renseigné"}</p>
        <p><strong>Période souhaitée:</strong> ${period || "Non renseigné"}</p>
        <p><strong>Budget indicatif:</strong> ${budget || "Non renseigné"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Envoyé depuis le formulaire de contact MediaHub Campus<br>
          MediaHub Campus &mdash; 4 Rue Guénot, 75011 Paris
        </p>
      `,
      text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Entreprise: ${company || "Non renseigné"}
Type de campagne: ${campaignType}
Zone(s) visée(s): ${zone || "Non renseigné"}
Période souhaitée: ${period || "Non renseigné"}
Budget indicatif: ${budget || "Non renseigné"}

Message:
${message}

--
MediaHub Campus - 4 Rue Guénot, 75011 Paris
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
