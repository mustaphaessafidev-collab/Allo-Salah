import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Allo Salah — Service coursier à Casablanca",
  description:
    "Allo Salah vous accompagne pour vos livraisons de colis, documents, achats et courses à Casablanca.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${jakarta.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
