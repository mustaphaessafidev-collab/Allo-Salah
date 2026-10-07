import { Coverage } from "@/components/home/Coverage";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Services } from "@/components/home/Services";
import { StatsStrip } from "@/components/home/StatsStrip";
import { Testimonial } from "@/components/home/Testimonial";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <HowItWorks />
        <Pricing />
        <Coverage />
        <WhyChooseUs />
        <Testimonial />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
