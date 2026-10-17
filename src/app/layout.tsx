import type { Metadata, Viewport } from "next";
import { Cedarville_Cursive, Jost } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Parché Studio",
  description: "High Fashion, Hand Made. Borrowed Prints made Irreverent.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${cedarville.variable}`}>
      <body>{children}</body>
    </html>
  );
}
