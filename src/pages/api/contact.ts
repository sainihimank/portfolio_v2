import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const RATE_LIMIT_MS = 10 * 60 * 1000;
const ipStore = new Map<string, number>();

function getIp(req: NextApiRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return req.socket.remoteAddress || "unknown";
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getIp(req);
  const now = Date.now();
  const lastSent = ipStore.get(ip) || 0;

  if (now - lastSent < RATE_LIMIT_MS) {
    return res.status(429).json({ error: "Rate limit: 1 message per 10 minutes per IP." });
  }

  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    ipStore.set(ip, now);
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Email service error." });
  }
}
