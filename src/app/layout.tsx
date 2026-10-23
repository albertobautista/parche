import type { Metadata, Viewport } from "next";
import { Cedarville_Cursive, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cedarville",
  display: "swap",
});

const SITE_URL = "https://parche-studio.com";
const TITLE = "Parché Studio · High Fashion, Hand Made";
const DESCRIPTION =
  "High Fashion, Hand Made. Borrowed Prints made Irreverent. One-of-one upcycled blazers and denim with vintage silk patches. Join the waitlist for Collection N°01.";
// Share image for WhatsApp, Instagram, iMessage, X... Bump ?v= when the image changes so their caches refresh.
const OG_IMAGE = {
  url: "/og-image.jpg?v=2",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Parché Studio ṔS logo, Collection N°01: upcycled blazers with silk patches",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Parché Studio",
  keywords: ["Parché Studio", "upcycled fashion", "hand made", "one of one", "patched blazers", "vintage silk patches", "upcycled denim"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Parché Studio",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#F2F0EB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${cedarville.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
