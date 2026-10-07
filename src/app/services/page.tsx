import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";

export const metadata: Metadata = {
  title: "Nos services — Allo Salah",
  description:
    "Des solutions de courses et de livraison adaptées aux particuliers, commerçants et entreprises à Casablanca.",
};

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
