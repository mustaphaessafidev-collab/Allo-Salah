"use client";

import { CasablancaCoverage } from "@/components/home/CasablancaCoverage";
import { useI18n } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Coverage() {
  const { t } = useI18n();
  return (
    <section id="zones" aria-labelledby="coverage-title" className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <SectionHeading
          id="coverage-title"
          eyebrow={t("coverage.eyebrow")}
          eyebrowClass="bg-mint-bright text-forest-700"
          title={t("coverage.title")}
        >
          {t("coverage.subtitle")}
        </SectionHeading>

        <CasablancaCoverage />
      </div>
    </section>
  );
}
