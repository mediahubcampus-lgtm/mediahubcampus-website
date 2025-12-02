import { NextResponse } from "next/server";

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

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, just log the message
    console.log("Contact form submission:", {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example Resend integration (uncomment and add RESEND_API_KEY env var):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'MediaHub Campus <noreply@mediahubcampus.com>',
      to: ['contact@mediahubcampus.com'],
      subject: `Nouveau contact: ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Entreprise:</strong> ${company || 'Non renseigné'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
