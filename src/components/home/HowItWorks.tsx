"use client";

import type { ComponentType, SVGProps } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircleIcon, NotePenIcon } from "@/components/ui/icons";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  numberClass: string;
  iconClass: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "how.step1Title",
    description: "how.step1",
    Icon: NotePenIcon,
    numberClass: "text-rust-700",
    iconClass: "bg-peach text-rust-700",
  },
  {
    number: "02",
    title: "how.step2Title",
    description: "how.step2",
    Icon: CheckCircleIcon,
    numberClass: "text-forest-700",
    iconClass: "bg-mint-bright text-forest-700",
  },
  {
    number: "03",
    title: "how.step3Title",
    description: "how.step3",
    Icon: CheckCircleIcon,
    numberClass: "text-ink",
    iconClass: "bg-periwinkle text-ink",
  },
];

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section
      id="comment-ca-marche"
      aria-labelledby="how-it-works-title"
      className="bg-mist py-20 sm:py-24"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <SectionHeading
          id="how-it-works-title"
          eyebrow={t("how.eyebrow")}
          eyebrowClass="bg-periwinkle text-ink"
          title={t("how.title")}
        >
          {t("how.subtitle")}
        </SectionHeading>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ number, title, description, Icon, numberClass, iconClass }) => (
            <li
              key={number}
              className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgb(22_27_46/0.04)]"
            >
              <div className="flex items-start justify-between">
                <span className={`text-[1.9rem] leading-none font-extrabold ${numberClass}`}>
                  {number}
                </span>
                <span className={`grid size-10 place-items-center rounded-full ${iconClass}`}>
                  <Icon className="size-4.5" />
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{t(title)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t(description)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
