"use client";

import type { ComponentType, SVGProps } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import Link from "next/link";
import {
  ArchiveBoxIcon,
  ArrowRightIcon,
  BoltIcon,
  MailCheckIcon,
  ShoppingBagIcon,
} from "@/components/ui/icons";
import { servicePages, type ServiceSlug } from "@/lib/services";

type Visual = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  tileClass: string;
  linkClass: string;
};

const visuals: Record<ServiceSlug, Visual> = {
  "livraison-colis": {
    Icon: ArchiveBoxIcon,
    tileClass: "bg-peach text-rust-700",
    linkClass: "text-rust-700",
  },
  documents: {
    Icon: MailCheckIcon,
    tileClass: "bg-periwinkle text-ink",
    linkClass: "text-ink",
  },
  "achats-courses": {
    Icon: ShoppingBagIcon,
    tileClass: "bg-apricot text-rust-700",
    linkClass: "text-rust-700",
  },
  "livraison-urgente": {
    Icon: BoltIcon,
    tileClass: "bg-mint-bright text-forest-700",
    linkClass: "text-forest-700",
  },
};

const copyKey: Record<ServiceSlug, "parcels" | "documents" | "shopping" | "urgent"> = {
  "livraison-colis": "parcels",
  documents: "documents",
  "achats-courses": "shopping",
  "livraison-urgente": "urgent",
};

const services = (Object.keys(servicePages) as ServiceSlug[]).map((slug) => ({
  slug,
  copy: copyKey[slug],
  ...visuals[slug],
}));

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" aria-labelledby="services-title" className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <div className="mx-auto max-w-180 text-center">
          <p className="inline-block rounded-full bg-peach px-3.5 py-1 text-[11px] font-bold tracking-wide text-rust-700 uppercase">
            {t("services.eyebrow")}
          </p>
          <h2
            id="services-title"
            className="mt-2 text-[2.1rem] leading-tight font-extrabold tracking-tight text-ink sm:text-[2.6rem]"
          >
            {t("services.title")}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted sm:text-[17px]">{t("services.subtitle")}</p>
        </div>

        <ul className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ slug, copy, Icon, tileClass, linkClass }) => (
            <li key={slug} className="min-w-0">
              <Link
                href="/services"
                className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgb(22_27_46/0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgb(22_27_46/0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700"
              >
                <span className={`grid size-14 place-items-center rounded-xl ${tileClass}`}>
                  <Icon className="size-5.5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{t(`services.${copy}.title`)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(`services.${copy}.description`)}</p>
                <span
                  className={`mt-auto inline-flex items-center gap-1.5 self-start pt-7 text-[13px] font-semibold ${linkClass}`}
                >
                  {t("services.more")}
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
