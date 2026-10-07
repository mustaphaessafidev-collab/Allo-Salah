import { ChatIcon, PhoneIcon, TruckIcon } from "@/components/ui/icons";
import { siteConfig, whatsappLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden bg-slate-night py-20 text-center sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-40 -z-10 size-140 rounded-full bg-rust-700/30 blur-[120px]"
      />

      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <p className="inline-block rounded-full bg-rust-700 px-3.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
          Disponibilité immédiate
        </p>
        <h2
          id="final-cta-title"
          className="mt-3 text-[2.1rem] leading-tight font-extrabold tracking-tight text-lavender sm:text-[2.6rem]"
        >
          Besoin d’une livraison ?
        </h2>
        <p className="mx-auto mt-2 max-w-146 text-base leading-relaxed text-slate-300 sm:text-[17px]">
          Contactez Allo Salah maintenant. Nous sommes déjà sur la route prêts à vous aider.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-forest-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChatIcon className="size-5" />
            WhatsApp ({siteConfig.phoneInternationalDisplay})
          </a>
          <a
            href={whatsappLink(siteConfig.deliveryRequestMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-rust-700 px-6 text-sm font-semibold text-white shadow-[0_8px_28px_rgb(166_60_6/0.45)] transition-colors hover:bg-rust-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <TruckIcon className="size-5" />
            Demander une livraison
          </a>
        </div>

        <p className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-200">
          <PhoneIcon className="size-4" />
          Ou appelez directement le{" "}
          <a
            href={siteConfig.phoneHref}
            className="rounded font-bold text-white underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {siteConfig.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
