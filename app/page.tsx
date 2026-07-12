import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Programmes from "@/components/Programmes";
import Fitness from "@/components/Fitness";
import WhyAIcon from "@/components/WhyAIcon";
import Experience from "@/components/Experience";
import EnrolCta from "@/components/EnrolCta";
import Gallery from "@/components/Gallery";
import EnquirySection from "@/components/EnquirySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-2 focus:text-obsidian"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <BrandStatement />
        <Programmes />
        <Fitness />
        <WhyAIcon />
        <Experience />
        <EnrolCta />
        <Gallery />
        <EnquirySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
