"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { SECTION_NAVIGATE_EVENT, SectionLink } from "@/components/layout/SectionLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CloseIcon, MenuIcon, UserIcon } from "@/components/ui/icons";
import { useI18n } from "@/i18n/LanguageProvider";
import type { Language } from "@/i18n/translations";
import { navLinks, whatsappLink } from "@/lib/site";

function WhatsAppDirect({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("nav.whatsappAria")}
      className={`items-center gap-1.5 rounded-full bg-mint px-3.5 py-1.5 text-[11px] font-semibold whitespace-nowrap text-forest-700 transition-colors hover:bg-mint-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700 ${className}`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-forest-700" />
      {t("nav.whatsappDirect")}
    </a>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  const options: { id: Language; flag: string; label: string }[] = [
    { id: "fr", flag: "🇫🇷", label: t("lang.fr") },
    { id: "ar", flag: "🇲🇦", label: t("lang.ar") },
  ];

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className="flex shrink-0 rounded-full bg-lavender p-0.5"
    >
      {options.map((option) => {
        const active = language === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLanguage(option.id)}
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700 sm:px-2.5 ${
              active ? "bg-white text-ink shadow-[0_2px_8px_rgb(22_27_46/0.08)]" : "text-ink/70 hover:text-ink"
            }`}
          >
            <span aria-hidden>{option.flag}</span>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const sync = () => setHash(decodeURIComponent(window.location.hash.replace(/^#/, "")));
    const onSection = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (typeof id === "string") setHash(id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    window.addEventListener(SECTION_NAVIGATE_EVENT, onSection);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      window.removeEventListener(SECTION_NAVIGATE_EVENT, onSection);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onBreakpoint = (e: MediaQueryListEvent) => e.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = "";
    };
  }, [open]);

  const { t } = useI18n();
  const close = () => setOpen(false);
  const requestHref = whatsappLink(t("cta.requestMessage"));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <nav
        aria-label={t("nav.aria")}
        className="mx-auto flex h-19 max-w-300 items-center justify-between gap-4 px-5 sm:px-6"
      >
        <Logo onClick={close} />

        <ul className="hidden items-center gap-0.5 rounded-full bg-lavender p-1 xl:flex">
          {navLinks.map((link) => {
            const active = isHome && (hash ? hash === link.id : link.id === "accueil");
            return (
              <li key={link.id}>
                <SectionLink
                  sectionId={link.id}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-rust-700 ${
                    active
                      ? "bg-white text-base font-bold text-ink shadow-[0_2px_8px_rgb(22_27_46/0.08)]"
                      : "text-[13px] font-medium text-ink/75 hover:text-ink"
                  }`}
                >
                  {t(link.key)}
                </SectionLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <WhatsAppDirect className="hidden xl:inline-flex" />
          <div className="hidden md:block">
            <ButtonLink href={requestHref} external aria-label={t("nav.requestAria")}>
              {t("nav.request")}
            </ButtonLink>
          </div>
          <SectionLink
            sectionId="contact"
            aria-label={t("nav.clientSpace")}
            className="hidden size-8.5 place-items-center rounded-full bg-rust-700 text-white transition-colors hover:bg-rust-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700 sm:grid"
          >
            <UserIcon className="size-4" />
          </SectionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            className="grid size-10 place-items-center rounded-full bg-lavender text-ink transition-colors hover:bg-line focus-visible:outline-2 focus-visible:outline-rust-700 xl:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-line bg-white xl:hidden"
      >
        <ul className="mx-auto flex max-w-300 flex-col gap-1 px-5 py-5 sm:px-6">
          {navLinks.map((link) => {
            const active = isHome && (hash ? hash === link.id : link.id === "accueil");
            return (
              <li key={link.id}>
                <SectionLink
                  sectionId={link.id}
                  onNavigate={close}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3.5 text-base transition-colors focus-visible:outline-2 focus-visible:outline-rust-700 ${
                    active ? "bg-lavender font-bold text-ink" : "font-medium text-ink/80 hover:bg-lavender/60"
                  }`}
                >
                  {t(link.key)}
                </SectionLink>
              </li>
            );
          })}
        </ul>
        <div className="mx-auto flex max-w-300 flex-col gap-3 px-5 pb-8 sm:px-6">
          <WhatsAppDirect className="inline-flex justify-center py-3 text-sm" />
          <ButtonLink href={requestHref} external size="lg" onClick={close} className="md:hidden">
            {t("nav.request")}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
