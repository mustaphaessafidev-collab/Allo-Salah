import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesCatalog />
      </main>
      <Footer />
    </>
  );
}