"use client";

import { useId, useState, type ReactNode } from "react";
import {
  CalculatorIcon,
  ChatIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  PhoneIcon,
  PinIcon,
  SendIcon,
} from "@/components/ui/icons";
import { useI18n } from "@/i18n/LanguageProvider";
import { deliveryTypes, estimatePrice, zones, type DeliveryTypeId } from "@/lib/pricing";
import { siteConfig, whatsappLink } from "@/lib/site";

const zoneKey: Record<string, string> = {
  "zone-1": "zones.z1",
  "zone-2": "zones.z2",
  "zone-3": "zones.z3",
};

const typeKey: Record<DeliveryTypeId, string> = {
  documents: "types.documents",
  colis: "types.colis",
  achats: "types.achats",
  courses: "types.courses",
  express: "types.express",
};

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  chevron?: boolean;
  children: ReactNode;
};

function SelectField({ label, value, onChange, icon, chevron, children }: FieldProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] font-bold tracking-wide text-ink uppercase">
        {label}
      </label>
      <div className="relative mt-1.5">
        {icon && (
          <span className="pointer-events-none absolute top-1/2 start-3.5 -translate-y-1/2">{icon}</span>
        )}
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-12 w-full cursor-pointer appearance-none rounded-xl bg-lavender text-sm text-ink transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-rust-700/40 ${
            icon ? "ps-10" : "ps-4"
          } ${chevron ? "pe-10" : "pe-4"}`}
        >
          {children}
        </select>
        {chevron && (
          <ChevronDownIcon className="pointer-events-none absolute top-1/2 end-3.5 size-4 -translate-y-1/2 text-ink" />
        )}
      </div>
    </div>
  );
}

export function PriceEstimator() {
  const { t } = useI18n();
  const [from, setFrom] = useState(zones[0].id);
  const [to, setTo] = useState(zones[1].id);
  const [type, setType] = useState<DeliveryTypeId>(deliveryTypes[0].id);
  const [quoted, setQuoted] = useState(false);

  const price = estimatePrice(from, to, type);
  const typeLabel = t(typeKey[type]);
  const message = [
    t("estimator.intro"),
    t("estimator.lineFrom", { place: t(`${zoneKey[from]}.short`) }),
    t("estimator.lineTo", { place: t(`${zoneKey[to]}.short`) }),
    t("estimator.lineType", { type: typeLabel }),
    t("estimator.linePrice", { price }),
  ].join("\n");

  const zoneOptions = zones.map((zone) => (
    <option key={zone.id} value={zone.id}>
      {t(`${zoneKey[zone.id]}.short`)}
    </option>
  ));

  return (
    <div
      id="estimateur"
      className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_rgb(22_27_46/0.10)] sm:p-10 sm:pt-9"
    >
      <div className="flex items-start gap-2.5">
        <CalculatorIcon className="mt-0.5 size-5.5 shrink-0 text-rust-700" />
        <div>
          <h3 className="text-lg leading-tight font-bold text-ink">{t("estimator.title")}</h3>
          <p className="text-xs text-muted">{t("estimator.subtitle")}</p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <SelectField
          label={t("estimator.from")}
          value={from}
          onChange={setFrom}
          icon={<span className="block size-3.5 rounded-full border-[3px] border-forest-700" />}
        >
          {zoneOptions}
        </SelectField>
        <SelectField
          label={t("estimator.to")}
          value={to}
          onChange={setTo}
          icon={<PinIcon className="size-4 text-rust-700" />}
        >
          {zoneOptions}
        </SelectField>
        <SelectField label={t("estimator.type")} value={type} onChange={(value) => setType(value as DeliveryTypeId)} chevron>
          {deliveryTypes.map((item) => (
            <option key={item.id} value={item.id}>
              {t(typeKey[item.id])}
            </option>
          ))}
        </SelectField>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4 rounded-2xl bg-lavender px-4 py-4" aria-live="polite">
        <div>
          <p className="text-xs text-muted">{t("estimator.price")}</p>
          <p className="text-[1.75rem] leading-tight font-extrabold text-rust-700">
            {price} {t("pricing.currency")}
          </p>
          <p className="mt-1 text-[11px] text-muted">{t("estimator.range")}</p>
        </div>
        <p className="mb-1.5 flex items-center gap-1 text-[11px] font-bold text-ink">
          <CheckCircleIcon className="size-4 text-forest-700" />
          {t("estimator.noSurcharge")}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setQuoted(true)}
        className="mt-3 flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-rust-700 text-sm font-semibold text-white shadow-lg shadow-rust-700/25 transition-colors hover:bg-rust-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700"
      >
        <SendIcon className="size-4" />
        {t("estimator.calculate")}
      </button>

      {quoted && (
        <div className="mt-3 space-y-2.5">
          <p className="text-center text-xs font-semibold text-forest-700">
            {t("estimator.confirmed", { price })}
          </p>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-forest-700 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
          >
            <ChatIcon className="size-4" />
            {t("estimator.whatsapp")}
          </a>
          <a
            href={siteConfig.phoneHref}
            className="flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-white text-sm font-semibold text-ink shadow-[0_4px_18px_rgb(22_27_46/0.07)] transition-shadow hover:shadow-[0_6px_22px_rgb(22_27_46/0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-700"
          >
            <PhoneIcon className="size-4 shrink-0 text-rust-700" />
            {t("estimator.call", { phone: siteConfig.phoneDisplay })}
          </a>
        </div>
      )}
    </div>
  );
}
