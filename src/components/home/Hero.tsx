import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  ArrowRightIcon,
  BoltSolidIcon,
  MotorbikeIcon,
  PinSolidIcon,
  StarSolidIcon,
} from "@/components/ui/icons";
import heroCourier from "@/assets/img1.png";

type Highlight = {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconClass: string;
};

// "XX" values are placeholders until real figures are confirmed.
const highlights: Highlight[] = [
  { label: "Livré en moins de XX min", Icon: BoltSolidIcon, iconClass: "text-amber-400" },
  { label: "Suivi direct WhatsApp & Appel", Icon: PinSolidIcon, iconClass: "text-red-500" },
  { label: "X.X/5 satisfaction client", Icon: StarSolidIcon, iconClass: "text-amber-400" },
];

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-canvas pt-12 pb-20 sm:pt-16 lg:pt-24 lg:pb-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[18%] h-115 w-160 rounded-full bg-peach/70 blur-[110px]" />
        <div className="absolute -right-24 -bottom-20 size-96 rounded-full bg-mint/80 blur-[90px]" />
      </div>

      <div className="mx-auto grid max-w-300 items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[10px] font-bold tracking-wide text-ink uppercase">
            <span aria-hidden className="size-2 rounded-full bg-forest-700" />
            Service coursier Casablanca en direct
          </p>

          <h1
            id="hero-title"
            className="mt-5 text-[2.35rem] leading-[1.15] font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[2.85rem]"
          >
            Votre livraison,
            <br />
            <span className="text-rust-700">simplement</span> et{" "}
            <span className="text-forest-700">rapidement</span>.
          </h1>

          <p className="mt-5 max-w-150 text-base leading-relaxed text-muted">
            Allo Salah vous accompagne pour vos livraisons de colis, documents, achats
            et courses à Casablanca. L’agilité d’un coursier de confiance à portée de
            main.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href="#tarifs" size="lg">
              Demander une livraison
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary" size="lg">
              Voir nos services
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {highlights.map(({ label, Icon, iconClass }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink shadow-[0_2px_10px_rgb(22_27_46/0.06)]"
              >
                <Icon className={`size-3.5 ${iconClass}`} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-140 px-3 sm:px-6 lg:max-w-none lg:px-0">
          <div className="rounded-[22px] bg-white p-1.5 shadow-[0_24px_60px_rgb(22_27_46/0.16)]">
            <Image
              src={heroCourier}
              alt="Coursier Allo Salah tenant un colis à côté de son scooter de livraison dans une rue de Casablanca"
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 470px, (min-width: 640px) 540px, 90vw"
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />
          </div>

          <div className="absolute -top-4 right-0 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_10px_30px_rgb(22_27_46/0.14)] lg:-right-6">
            <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-ink uppercase">
              <span aria-hidden className="size-2 rounded-full bg-forest-700" />
              Casablanca Express
            </p>
            <p className="pl-3.5 text-[13px] font-semibold text-forest-700">Disponible 7j/7</p>
          </div>

          <div className="absolute -bottom-6 left-0 flex items-center gap-3 rounded-xl bg-white py-2.5 pr-5 pl-3 shadow-[0_10px_30px_rgb(22_27_46/0.14)] lg:-left-6">
            <span className="grid size-10 place-items-center rounded-full bg-peach text-rust-700">
              <MotorbikeIcon className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] text-muted">Course moyenne</span>
              <span className="block text-lg font-extrabold text-rust-700">Dès 20 DH</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
