"use client";

import { useI18n } from "@/i18n/LanguageProvider";

const stats = [
  { value: "stats.delayValue", label: "stats.delay", valueClass: "text-rust-700" },
  { value: "stats.areasValue", label: "stats.areas", valueClass: "text-ink" },
  { value: "stats.onTimeValue", label: "stats.onTime", valueClass: "text-forest-700" },
  { value: "stats.localValue", label: "stats.local", valueClass: "text-ink" },
];

export function StatsStrip() {
  const { t } = useI18n();
  return (
    <section aria-label={t("stats.aria")} className="bg-white">
      <dl className="mx-auto grid max-w-300 grid-cols-2 gap-y-8 px-5 py-8 sm:px-6 md:grid-cols-4 md:py-6">
        {stats.map(({ value, label, valueClass }) => (
          <div key={label} className="flex flex-col-reverse items-center text-center">
            <dt className="mt-1 text-xs text-muted sm:text-[13px]">{t(label)}</dt>
            <dd className={`text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2rem] ${valueClass}`}>
              {t(value)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
