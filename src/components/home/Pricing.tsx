"use client";

import { PriceEstimator } from "@/components/home/PriceEstimator";
import { useI18n } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { zones, type Zone } from "@/lib/pricing";

const zoneAccents: Record<number, { label: string; price: string }> = {
  1: { label: "text-rust-700", price: "text-rust-700" },
  2: { label: "text-forest-700", price: "text-ink" },
  3: { label: "text-ink", price: "text-ink" },
};

const zoneKey = { 1: "zones.z1", 2: "zones.z2", 3: "zones.z3" } as const;

function ZoneCard({ number, startingPrice }: Zone) {
  const { t } = useI18n();
  const accent = zoneAccents[number];
  const key = zoneKey[number];
  return (
    <li className="flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_4px_24px_rgb(22_27_46/0.04)]">
      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-2">
          <span className={`text-[10px] font-bold tracking-wide uppercase ${accent.label}`}>
            {t("pricing.zone", { number })}
          </span>
          <span className="rounded-full bg-lavender px-2 py-0.5 text-[10px] font-bold text-ink">
            {t(`${key}.duration`)}
          </span>
        </p>
        <h3 className="mt-1.5 text-lg leading-snug font-bold text-ink">{t(`${key}.name`)}</h3>
        <p className="mt-1 text-xs text-muted">{t(`${key}.areas`)}</p>
      </div>
      <div className="shrink-0 text-end">
        <p className="text-[10px] font-bold tracking-wide text-muted uppercase">{t("pricing.from")}</p>
        <p className={`leading-none font-extrabold ${accent.price}`}>
          <span className="text-[2.5rem] tracking-tight">{startingPrice}</span>
          <span className="ms-1.5 text-lg">{t("pricing.currency")}</span>
        </p>
      </div>
    </li>
  );
}

export function Pricing() {
  const { t } = useI18n();
  return (
    <section id="tarifs" aria-labelledby="pricing-title" className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <SectionHeading
          id="pricing-title"
          eyebrow={t("pricing.eyebrow")}
          eyebrowClass="bg-peach text-rust-700"
          title={t("pricing.title")}
        >
          {t("pricing.subtitle")}
        </SectionHeading>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.44fr_1fr] lg:gap-10">
          <ul className="space-y-4">
            {zones.map((zone) => (
              <ZoneCard key={zone.id} {...zone} />
            ))}
          </ul>
          <PriceEstimator />
        </div>
      </div>
    </section>
  );
}
