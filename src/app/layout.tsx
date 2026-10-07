import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import type { Language } from "@/i18n/translations";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Allo Salah — Service coursier à Casablanca",
  description:
    "Allo Salah vous accompagne pour vos livraisons de colis, documents, achats et courses à Casablanca.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const jar = await cookies();
  const saved = jar.get("allo-salah-lang")?.value;
  const language: Language = saved === "ar" ? "ar" : "fr";

  return (
    <html
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`${jakarta.variable} ${arabic.variable} antialiased`}
    >
      <body className="font-sans">
        <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
