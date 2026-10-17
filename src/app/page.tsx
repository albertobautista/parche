import Header from "@/components/Header";
import Film from "@/components/Film";
import Statement from "@/components/Statement";
import Edit from "@/components/Edit";
import Manifesto from "@/components/Manifesto";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
