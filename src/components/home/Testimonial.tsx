import { StarIcon } from "@/components/ui/icons";

// Placeholder content: replace with a real, approved customer review.
const testimonial = {
  quote:
    "Témoignage client à venir. Remplacez ce texte par l’avis réel d’un client Allo Salah à Casablanca.",
  name: "Prénom N.",
  initials: "XX",
  role: "Fonction, Casablanca",
};

export function Testimonial() {
  return (
    <section aria-label="Avis client" className="relative -mt-12 bg-mist px-5 pb-20 sm:-mt-14 sm:px-6 sm:pb-24">
      <figure className="mx-auto max-w-194 rounded-3xl bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgb(22_27_46/0.10)] sm:px-12 sm:py-9">
        <div aria-hidden className="flex justify-center gap-2 text-amber-500">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className="size-5" />
          ))}
        </div>
        <blockquote className="mt-4 text-lg leading-snug font-semibold text-ink italic sm:text-xl">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mt-4 inline-flex items-center gap-3 text-left">
          <span className="grid size-10 place-items-center rounded-full bg-peach text-xs font-bold text-rust-700">
            {testimonial.initials}
          </span>
          <span>
            <span className="block text-[13px] font-bold text-ink">{testimonial.name}</span>
            <span className="block text-xs text-muted">{testimonial.role}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
