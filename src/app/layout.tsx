import type { Metadata } from "next";
import { Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import { HashScrollRestore } from "@/components/layout/HashScrollRestore";
import { LanguageProvider } from "@/i18n/LanguageProvider";
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
  title: "Allo Salah",
  description: "Allo Salah",
  verification: {
    google: "m2ugXbJjJlnmbh-tM56sZ3p_jri3vMYr0PaZRAeF6fw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${jakarta.variable} ${arabic.variable} antialiased`}
    >
      <body className="font-sans">
        <LanguageProvider initialLanguage="fr">
          <HashScrollRestore />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}