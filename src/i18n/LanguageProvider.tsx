"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { translations, type Language } from "@/i18n/translations";

export const LANGUAGE_STORAGE_KEY = "allo-salah-lang";
const LANGUAGE_COOKIE = "allo-salah-lang";

type I18n = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<I18n | null>(null);

function lookup(language: Language, key: string) {
  const parts = key.split(".");
  let node: unknown = translations[language];
  for (const part of parts) {
    if (!node || typeof node !== "object" || !(part in node)) return key;
    node = (node as Record<string, unknown>)[part];
  }
  return typeof node === "string" ? node : key;
}

function format(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? ""));
}

function applyLanguage(language: Language) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}

function persist(language: Language) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  document.cookie = `${LANGUAGE_COOKIE}=${language};path=/;max-age=31536000;SameSite=Lax`;
  applyLanguage(language);
}

export function LanguageProvider({
  initialLanguage,
  children,
}: {
  initialLanguage: Language;
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "ar" || stored === "fr") {
      if (stored !== initialLanguage) setLanguageState(stored);
      persist(stored);
      return;
    }
    localStorage.setItem(LANGUAGE_STORAGE_KEY, initialLanguage);
    applyLanguage(initialLanguage);
  }, [initialLanguage]);

  useEffect(() => {
    applyLanguage(language);
    const titleKey = pathname.startsWith("/services") ? "meta.servicesTitle" : "meta.title";
    document.title = lookup(language, titleKey);
  }, [language, pathname]);

  const value = useMemo<I18n>(
    () => ({
      language,
      setLanguage: (next) => {
        setLanguageState(next);
        persist(next);
      },
      t: (key, vars) => format(lookup(language, key), vars),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useI18n must be used within LanguageProvider");
  return context;
}
