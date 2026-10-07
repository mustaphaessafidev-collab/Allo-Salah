"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CloseIcon, MenuIcon, UserIcon } from "@/components/ui/icons";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site";

function WhatsAppDirect({ className = "" }: { className?: string }) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Direct (nouvel onglet)"
      className={`items-center gap-1.5 rounded-full bg-mint px-3.5 py-1.5 text-[11px] font-semibold whitespace-nowrap text-forest-700 transition-colors hover:bg-mint-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700 ${className}`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-forest-700" />
      WhatsApp Direct
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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

  const close = () => setOpen(false);
  const requestHref = whatsappLink(siteConfig.deliveryRequestMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-19 max-w-300 items-center justify-between gap-4 px-5 sm:px-6"
      >
        <Logo onClick={close} />

        <ul className="hidden items-center gap-0.5 rounded-full bg-lavender p-1 xl:flex">
          {navLinks.map((link) => {
            const active = isHome && link.href === "/#accueil";
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-rust-700 ${
                    active
                      ? "bg-white text-base font-bold text-ink shadow-[0_2px_8px_rgb(22_27_46/0.08)]"
                      : "text-[13px] font-medium text-ink/75 hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <WhatsAppDirect className="hidden xl:inline-flex" />
          <div className="hidden md:block">
            <ButtonLink
              href={requestHref}
              external
              aria-label="Demander une livraison via WhatsApp (nouvel onglet)"
            >
              Demander une livraison
            </ButtonLink>
          </div>
          <button
            type="button"
            aria-label="Espace client"
            className="hidden size-8.5 place-items-center rounded-full bg-rust-700 text-white transition-colors hover:bg-rust-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700 sm:grid"
          >
            <UserIcon className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
            const active = isHome && link.href === "/#accueil";
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3.5 text-base transition-colors focus-visible:outline-2 focus-visible:outline-rust-700 ${
                    active ? "bg-lavender font-bold text-ink" : "font-medium text-ink/80 hover:bg-lavender/60"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mx-auto flex max-w-300 flex-col gap-3 px-5 pb-8 sm:px-6">
          <WhatsAppDirect className="inline-flex justify-center py-3 text-sm" />
          <ButtonLink href={requestHref} external size="lg" onClick={close} className="md:hidden">
            Demander une livraison
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
