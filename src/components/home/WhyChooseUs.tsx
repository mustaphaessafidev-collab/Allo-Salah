"use client";

import type { ComponentType, SVGProps } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendarIcon, GaugeIcon, ShieldCheckIcon, TagCheckIcon } from "@/components/ui/icons";

type Reason = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  tileClass: string;
};

// "XX" values are placeholders until real figures are confirmed.
const reasons: Reason[] = [
  {
    title: "why.fastTitle",
    description: "why.fast",
    Icon: GaugeIcon,
    tileClass: "bg-peach text-rust-700",
  },
  {
    title: "why.reliableTitle",
    description: "why.reliable",
    Icon: ShieldCheckIcon,
    tileClass: "bg-mint-bright text-forest-700",
  },
  {
    title: "why.priceTitle",
    description: "why.price",
    Icon: TagCheckIcon,
    tileClass: "bg-apricot text-rust-700",
  },
  {
    title: "why.openTitle",
    description: "why.open",
    Icon: CalendarIcon,
    tileClass: "bg-periwinkle text-ink",
  },
];

export function WhyChooseUs() {
  const { t } = useI18n();
  return (
    <section id="apropos" aria-labelledby="why-title" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <SectionHeading
          id="why-title"
          eyebrow={t("why.eyebrow")}
          eyebrowClass="bg-periwinkle text-ink"
          title={t("why.title")}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, description, Icon, tileClass }) => (
            <li
              key={title}
              className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgb(22_27_46/0.04)]"
            >
              <span className={`grid size-12 place-items-center rounded-xl ${tileClass}`}>
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{t(title)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t(description)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
