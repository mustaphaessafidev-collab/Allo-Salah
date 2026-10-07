"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/LanguageProvider";
import { ChatIcon } from "@/components/ui/icons";
import { servicePages, type ServiceSlug } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

const copyKey: Record<ServiceSlug, "parcels" | "documents" | "shopping" | "urgent"> = {
  "livraison-colis": "parcels",
  documents: "documents",
  "achats-courses": "shopping",
  "livraison-urgente": "urgent",
};

const services = (Object.keys(servicePages) as ServiceSlug[]).map((slug) => ({
  ...servicePages[slug],
  copy: copyKey[slug],
}));

export function ServicesCatalog() {
  const { t } = useI18n();
  return (
    <section className="bg-canvas py-16 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <div className="mx-auto max-w-180 text-center">
          <p className="inline-block rounded-full bg-peach px-3.5 py-1 text-[11px] font-bold tracking-wide text-rust-700 uppercase">
            {t("services.pageEyebrow")}
          </p>
          <h1 className="mt-2 text-[2.1rem] leading-tight font-extrabold tracking-tight text-ink sm:text-[2.6rem]">
            {t("services.title")}
          </h1>
          <p className="mt-2 text-base leading-relaxed text-muted sm:text-[17px]">{t("services.pageSubtitle")}</p>
        </div>

        <ul className="mt-11 grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => (
            <li key={service.slug} className="min-w-0">
              <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_4px_24px_rgb(22_27_46/0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(22_27_46/0.12)]">
                <Image
                  src={service.image}
                  alt={t(`services.${service.copy}.imageAlt`)}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-[280px] w-full object-cover"
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    objectPosition: service.imagePosition,
                    borderRadius: "20px 20px 0 0",
                  }}
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="text-xl font-bold text-ink">{t(`services.${service.copy}.title`)}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {t(`services.${service.copy}.detail`)}
                  </p>
                  <a
                    href={whatsappLink(t(`services.${service.copy}.whatsapp`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 self-start rounded-full bg-forest-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
                  >
                    <ChatIcon className="size-4" />
                    {t("services.whatsapp")}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
