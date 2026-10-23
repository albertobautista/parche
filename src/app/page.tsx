import Header from "@/components/Header";
import Film from "@/components/Film";
import Statement from "@/components/Statement";
import Edit from "@/components/Edit";
import Manifesto from "@/components/Manifesto";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

// Structured data so search engines know the brand behind the page.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.parche-studio.com/#organization",
      name: "Parché Studio",
      url: "https://www.parche-studio.com/",
      logo: "https://www.parche-studio.com/icon.png",
      image: "https://www.parche-studio.com/og-image.jpg",
      slogan: "High Fashion, Hand Made. Borrowed Prints made Irreverent.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.parche-studio.com/#website",
      name: "Parché Studio",
      url: "https://www.parche-studio.com/",
      inLanguage: "en",
      publisher: { "@id": "https://www.parche-studio.com/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Header />
      <main id="top">
        <Film />
        <Statement />
        <Edit />
        <Manifesto />
        <Gallery />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
