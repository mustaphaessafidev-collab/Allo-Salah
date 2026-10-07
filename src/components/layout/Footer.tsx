import { Logo } from "@/components/layout/Logo";
import { ChatIcon, CheckCircleIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { siteConfig, whatsappLink } from "@/lib/site";

const quickLinks = [
  { label: "Accueil & Suivi", href: "/#accueil" },
  { label: "Livraisons à moto", href: "/#services" },
  { label: "Grille tarifaire", href: "/#tarifs" },
  { label: "Quartiers & Périphérie", href: "/#zones" },
  { label: "Support Dispatch", href: whatsappLink(), external: true },
];

// Legal pages don't exist yet, so these are rendered as plain text.
const legalLinks = ["Mentions Légales", "Conditions de Service", "Confidentialité"];

const headingClass = "text-lg font-bold text-ink";
const linkClass =
  "rounded transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <div className="grid gap-10 pt-12 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo showBadge={false} />
            <p className="mt-4 max-w-65 text-xs leading-relaxed text-muted">
              Service de coursier et livraison express à moto à Casablanca. Prise en charge
              rapide et suivi direct par WhatsApp dans tous les quartiers.
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-forest-700">
              <CheckCircleIcon className="size-4" />
              Opérateur local à Casablanca
            </p>
          </div>

          <div>
            <h2 className={headingClass}>Contact &amp; Agence</h2>
            <address className="mt-3 space-y-2 text-xs text-muted not-italic">
              <p className="flex items-start gap-2">
                <PinIcon className="mt-px size-4 shrink-0 text-rust-700" />
                Adresse à confirmer, Casablanca, Maroc
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
                  Assistance WhatsApp 24/7
                </a>
              </p>
            </address>
          </div>

          <nav aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title" className={headingClass}>
              Navigation Rapide
            </h2>
            <ul className="mt-3 space-y-1.5 text-xs text-muted">
              {quickLinks.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className={linkClass}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Disponibilité</h2>
            <div className="mt-3 rounded-xl bg-lavender px-4 py-3.5">
              <p className="flex items-center gap-1.5 text-[15px] font-bold text-rust-700">
                <ClockIcon className="size-4.5" />
                7j/7 de 1h à 12h
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Détails des horaires et permanences à confirmer.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {legalLinks.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
