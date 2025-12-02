import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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

    if (!resend) {
      console.log("No RESEND_API_KEY configured, logging email instead:");
      console.log({ name, email, company, message });
      return NextResponse.json({
        success: true,
        testMode: true,
        message: "Email logged in console (no API key configured)"
      });
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@url5309.mediahubcampus.com",
      to: (process.env.CONTACT_EMAILS || "contact@mediahubcampus.com").split(",").map(e => e.trim()),
      replyTo: email,
      subject: `Nouveau contact: ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Entreprise:</strong> ${company || "Non renseign\u00e9"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Envoy\u00e9 depuis le formulaire de contact MediaHub Campus
        </p>
      `,
      text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Entreprise: ${company || "Non renseign\u00e9"}

Message:
${message}
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
