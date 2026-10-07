import type { ComponentType, SVGProps } from "react";
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
    title: "Vous faites votre demande",
    description:
      "Envoyez-nous l’adresse de ramassage et de livraison en quelques secondes via notre formulaire ou directement sur WhatsApp.",
    Icon: NotePenIcon,
    numberClass: "text-rust-700",
    iconClass: "bg-peach text-rust-700",
  },
  {
    number: "02",
    title: "Nous confirmons votre course",
    description:
      "Salah ou un coursier de l’équipe vous confirme le tarif fixe et prend en charge le colis immédiatement avec suivi en direct.",
    Icon: CheckCircleIcon,
    numberClass: "text-forest-700",
    iconClass: "bg-mint-bright text-forest-700",
  },
  {
    number: "03",
    title: "Votre colis est livré",
    description:
      "Remise en mains propres sécurisée avec confirmation instantanée par photo, accusé de réception ou message texte.",
    Icon: CheckCircleIcon,
    numberClass: "text-ink",
    iconClass: "bg-periwinkle text-ink",
  },
];

export function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      aria-labelledby="how-it-works-title"
      className="bg-mist py-20 sm:py-24"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <SectionHeading
          id="how-it-works-title"
          eyebrow="Simplicité & rapidité"
          eyebrowClass="bg-periwinkle text-ink"
          title="Comment ça marche ?"
        >
          Pas d’application lourde à installer. 3 étapes faciles pour envoyer ou recevoir
          en toute sérénité.
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
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
