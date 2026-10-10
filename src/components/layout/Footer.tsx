"use client";

import { Logo } from "@/components/layout/Logo";
import { SectionLink } from "@/components/layout/SectionLink";
import { useI18n } from "@/i18n/LanguageProvider";
import { ChatIcon, CheckCircleIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { siteConfig, whatsappLink } from "@/lib/site";

const quickLinks = [
  { key: "footer.linkHome", id: "accueil" },
  { key: "footer.linkMoto", id: "services" },
  { key: "footer.linkPrices", id: "tarifs" },
  { key: "footer.linkAreas", id: "zones" },
] as const;

const legalKeys = ["footer.legal", "footer.terms", "footer.privacy"] as const;

const headingClass = "text-lg font-bold text-ink";
const linkClass =
  "rounded transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <div className="grid gap-10 pt-12 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo showBadge={false} />
            <p className="mt-4 max-w-65 text-xs leading-relaxed text-muted">{t("footer.blurb")}</p>
            <p className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-forest-700">
              <CheckCircleIcon className="size-4" />
              {t("footer.local")}
            </p>
          </div>

          <div>
            <h2 className={headingClass}>{t("footer.contact")}</h2>
            <address className="mt-3 space-y-2 text-xs text-muted not-italic">
              <p className="flex items-start gap-2">
                <PinIcon className="mt-px size-4 shrink-0 text-rust-700" />
                {t("footer.address")}
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="size-4 shrink-0 text-rust-700" />
                <a href={siteConfig.phoneHref} className={`font-bold text-ink ${linkClass}`}>
                  {siteConfig.phoneInternationalDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <ChatIcon className="size-4 shrink-0 text-forest-700" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold text-forest-700 ${linkClass}`}
                >
                  {t("footer.support")}
                </a>
              </p>
            </address>
          </div>

          <nav aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title" className={headingClass}>
              {t("footer.nav")}
            </h2>
            <ul className="mt-3 space-y-1.5 text-xs text-muted">
              {quickLinks.map(({ key, id }) => (
                <li key={key}>
                  <SectionLink sectionId={id} className={linkClass}>
                    {t(key)}
                  </SectionLink>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {t("footer.linkSupport")}
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>{t("footer.availability")}</h2>
            <div className="mt-3 rounded-xl bg-lavender px-4 py-3.5">
              <p className="flex items-center gap-1.5 text-[15px] font-bold text-rust-700">
                <ClockIcon className="size-4.5" />
                {t("footer.hours")}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{t("footer.hoursNote")}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {legalKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
