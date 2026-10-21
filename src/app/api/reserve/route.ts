import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { findProduct } from "@/data/products";
import { reservationEmail } from "@/lib/reservationEmail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sends one email per reservation to RESERVATION_TO_EMAIL with the article and the customer's email.
export async function POST(req: Request) {
  let body: { productId?: unknown; email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const product = typeof body.productId === "string" ? findProduct(body.productId) : undefined;
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!product) {
    return NextResponse.json({ error: "unknown_product" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESERVATION_TO_EMAIL;
  const from = process.env.RESERVATION_FROM_EMAIL || "Parché Studio <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Reservation email not configured: set RESEND_API_KEY and RESERVATION_TO_EMAIL");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  // The product photo travels inside the email as an inline attachment, so it shows even when the
  // mail client can't fetch it from the site. If the file can't be read, fall back to its public URL.
  const attachments: { filename: string; content: string; content_id: string }[] = [];
  let imageSrc: string | undefined;
  const photo = `${product.id}.jpg`;
  try {
    const content = await readFile(path.join(process.cwd(), "public/img/email", photo));
    attachments.push({ filename: photo, content: content.toString("base64"), content_id: product.id });
    imageSrc = `cid:${product.id}`;
  } catch (err) {
    console.error("Reservation photo not readable, using its URL", err);
    const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    const siteUrl = process.env.SITE_URL || (prod ? `https://${prod}` : new URL(req.url).origin);
    if (siteUrl.startsWith("https://")) imageSrc = new URL(`/img/email/${photo}`, siteUrl).href;
  }
  const { subject, text, html } = reservationEmail({ product, email, imageSrc });

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: email,
        subject,
        text,
        html,
        attachments,
      }),
    });
  } catch (err) {
    console.error("Resend request failed", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
