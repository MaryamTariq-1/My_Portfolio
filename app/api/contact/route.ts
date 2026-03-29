import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const user = process.env.SMTP_USER || process.env.SMTP_USERNAME;
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (!user || !pass || !to) {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({
        ok: true,
        simulated: true,
        message:
          "Message accepted in local mode. Add SMTP_USER/SMTP_PASS to send real emails."
      });
    }

    return NextResponse.json(
      {
        error:
          "Email is not configured on the server. Add SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL in your environment."
      },
      { status: 503 }
    );
  }

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "587");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const ownerSubject = `Portfolio message from ${name}`;
  const ownerText = `You received a message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;

  const visitorSubject = "Thanks, your message was delivered";
  const visitorText = `Hi ${name},\n\nThanks for reaching out through my portfolio. Your message was delivered and I will get back to you soon.\n\nBest regards,\nMaryam Tariq\n`;

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${user}>`,
      to,
      replyTo: email,
      subject: ownerSubject,
      text: ownerText
    });

    await transporter.sendMail({
      from: `"Maryam Tariq" <${user}>`,
      to: email,
      subject: visitorSubject,
      text: visitorText
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact mail error:", err);
    return NextResponse.json(
      { error: "Could not send email. Check SMTP settings and try again later." },
      { status: 500 }
    );
  }
}
