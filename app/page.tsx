import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
