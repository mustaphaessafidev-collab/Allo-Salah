import type { ComponentType, SVGProps } from "react";
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
    title: "Rapide",
    description:
      "Livraison moyenne en XX minutes dans tout le centre urbain. Pas d’attente superflue.",
    Icon: GaugeIcon,
    tileClass: "bg-peach text-rust-700",
  },
  {
    title: "Fiable",
    description:
      "Remise en main propre garantie et manipulation particulièrement soignée de vos colis.",
    Icon: ShieldCheckIcon,
    tileClass: "bg-mint-bright text-forest-700",
  },
  {
    title: "Prix transparents",
    description:
      "Tarif annoncé avant le départ, aucun supplément imprévu ni frais kilométrique opaque.",
    Icon: TagCheckIcon,
    tileClass: "bg-apricot text-rust-700",
  },
  {
    title: "Disponible 7j/7",
    description:
      "Service 7 jours sur 7, de XXhXX à XXhXX sans interruption le midi ni le week-end.",
    Icon: CalendarIcon,
    tileClass: "bg-periwinkle text-ink",
  },
];

export function WhyChooseUs() {
  return (
    <section id="pourquoi-allo-salah" aria-labelledby="why-title" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <SectionHeading
          id="why-title"
          eyebrow="Pourquoi choisir Allo Salah"
          eyebrowClass="bg-periwinkle text-ink"
          title="La confiance d’un coursier local dévoué"
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
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
