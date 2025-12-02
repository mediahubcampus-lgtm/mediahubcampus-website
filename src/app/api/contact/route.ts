import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email via SendGrid
    await sgMail.send({
      to: process.env.CONTACT_EMAIL || "contact@mediahubcampus.com",
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@mediahubcampus.com",
      replyTo: email,
      subject: `Nouveau contact: ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Entreprise:</strong> ${company || "Non renseigné"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Envoyé depuis le formulaire de contact MediaHub Campus
        </p>
      `,
      text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Entreprise: ${company || "Non renseigné"}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
