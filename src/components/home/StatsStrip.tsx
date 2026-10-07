// "XX" values are placeholders until real figures are confirmed.
const stats = [
  { value: "15 min", label: "Délai moyen centre-ville", valueClass: "text-rust-700" },
  { value: "35+", label: "Quartiers desservis", valueClass: "text-ink" },
  { value: "99.9%", label: "Livraisons à l’heure", valueClass: "text-forest-700" },
  { value: "100%", label: "Casablanca Local", valueClass: "text-ink" },
];

export function StatsStrip() {
  return (
    <section aria-label="Allo Salah en chiffres" className="bg-white">
      <dl className="mx-auto grid max-w-300 grid-cols-2 gap-y-8 px-5 py-8 sm:px-6 md:grid-cols-4 md:py-6">
        {stats.map(({ value, label, valueClass }) => (
          <div key={label} className="flex flex-col-reverse items-center text-center">
            <dt className="mt-1 text-xs text-muted sm:text-[13px]">{label}</dt>
            <dd className={`text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2rem] ${valueClass}`}>
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
