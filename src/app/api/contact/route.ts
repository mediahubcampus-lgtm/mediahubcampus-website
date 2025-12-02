import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Test mode - set to false when SendGrid DNS is ready
const TEST_MODE = process.env.SENDGRID_TEST_MODE === "true" || !process.env.SENDGRID_API_KEY;

if (!TEST_MODE && process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

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

    const emailData = {
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
    };

    // Test mode - just log the email
    if (TEST_MODE) {
      console.log("📧 [TEST MODE] Email would be sent:");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(`To: ${emailData.to}`);
      console.log(`From: ${emailData.from}`);
      console.log(`Reply-To: ${emailData.replyTo}`);
      console.log(`Subject: ${emailData.subject}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(emailData.text);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

      return NextResponse.json({
        success: true,
        testMode: true,
        message: "Email logged in console (test mode)"
      });
    }

    // Production mode - send via SendGrid
    await sgMail.send(emailData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
