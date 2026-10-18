import type { Product } from "@/data/products";

// Reservation notice sent to the studio inbox. Email clients ignore <style> and modern CSS,
// so the layout is tables with inline styles, in the landing's bone / midnight / red palette.
const BONE = "#F2F0EB";
const INK = "#1B1B3A";
const MIDNIGHT = "#070919";
const RED = "#C0272D";
const MUTE = "#6B6B80";
const LINE = "#DCDAD6";
const SANS = "'Jost','Futura PT',Futura,'Century Gothic',Helvetica,Arial,sans-serif";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "long", timeZone: "Europe/Madrid" }).format(d);
}

export function reservationEmail({
  product,
  email,
  siteUrl,
  date = new Date(),
}: {
  product: Product;
  email: string;
  // Public origin of the site; product photo is shown only when it is reachable over https.
  siteUrl?: string;
  date?: Date;
}) {
  const name = escapeHtml(product.name);
  const mail = escapeHtml(email);
  const mailto = escapeHtml(
    `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Tu reserva de ${product.name} · Parché Studio`)}`,
  );
  const when = escapeHtml(formatDate(date));
  const img = siteUrl?.startsWith("https://") ? escapeHtml(new URL(product.img, siteUrl).href) : "";

  const subject = `Nueva reserva: ${product.name}`;

  const text = [
    "PARCHÉ STUDIO",
    "Nueva reserva",
    "",
    `Artículo: ${product.name}`,
    `Precio: €${product.price}`,
    `Cliente: ${email}`,
    `Fecha: ${formatDate(date)}`,
    "",
    "Responde a este correo para escribir directamente al cliente.",
  ].join("\n");

  const label = `font-family:${SANS};font-size:10px;letter-spacing:3px;text-transform:uppercase;`;

  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${BONE};color:${INK};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${name} · ${mail}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BONE};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
      <tr><td align="center" style="background:${MIDNIGHT};padding:36px 24px 32px;">
        <div style="font-family:${SANS};font-weight:300;font-size:26px;letter-spacing:9px;color:${BONE};text-transform:uppercase;line-height:1;padding-left:9px;">PARCHÉ</div>
        <div style="font-family:${SANS};font-size:8px;letter-spacing:4px;color:${BONE};text-transform:uppercase;line-height:1;padding-top:10px;padding-left:4px;">STUDIO</div>
      </td></tr>
      <tr><td style="height:3px;line-height:3px;font-size:0;background:${RED};">&nbsp;</td></tr>
      <tr><td style="background:#FFFFFF;padding:40px 36px 12px;">
        <div style="${label}color:${RED};">Nueva reserva</div>
        <h1 style="margin:14px 0 0;font-family:${SANS};font-weight:300;font-size:30px;line-height:1.2;letter-spacing:4px;text-transform:uppercase;color:${INK};">${name}</h1>
        <div style="margin-top:8px;font-family:${SANS};font-size:15px;letter-spacing:1px;color:${MUTE};">€${product.price}</div>
      </td></tr>${
        img
          ? `
      <tr><td style="background:#FFFFFF;padding:24px 36px 0;">
        <img src="${img}" width="488" alt="${name}" style="display:block;width:100%;max-width:488px;height:auto;border:0;">
      </td></tr>`
          : ""
      }
      <tr><td style="background:#FFFFFF;padding:28px 36px 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding:16px 0;border-top:1px solid ${LINE};${label}color:${MUTE};" width="110">Cliente</td>
            <td style="padding:16px 0;border-top:1px solid ${LINE};font-family:${SANS};font-size:15px;color:${INK};word-break:break-all;"><a href="${mailto}" style="color:${INK};text-decoration:underline;">${mail}</a></td>
          </tr>
          <tr>
            <td style="padding:16px 0;border-top:1px solid ${LINE};border-bottom:1px solid ${LINE};${label}color:${MUTE};" width="110">Fecha</td>
            <td style="padding:16px 0;border-top:1px solid ${LINE};border-bottom:1px solid ${LINE};font-family:${SANS};font-size:15px;color:${INK};">${when}</td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="background:#FFFFFF;padding:28px 36px 44px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td style="background:${MIDNIGHT};">
            <a href="${mailto}" style="display:inline-block;padding:15px 28px;${label}color:${BONE};text-decoration:none;">Escribir al cliente</a>
          </td>
        </tr></table>
        <p style="margin:18px 0 0;font-family:${SANS};font-size:13px;line-height:1.7;color:${MUTE};">También puedes responder a este correo: la respuesta llega directamente al cliente.</p>
      </td></tr>
      <tr><td align="center" style="padding:28px 24px 0;font-family:${SANS};font-size:11px;letter-spacing:1px;line-height:1.8;color:${MUTE};">
        High Fashion, Hand Made.<br>Borrowed Prints made Irreverent.
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;

  return { subject, text, html };
}
