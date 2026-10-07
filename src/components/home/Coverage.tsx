import { CasablancaCoverage } from "@/components/home/CasablancaCoverage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Coverage() {
  return (
    <section id="zones" aria-labelledby="coverage-title" className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <SectionHeading
          id="coverage-title"
          eyebrow="Zone de couverture"
          eyebrowClass="bg-mint-bright text-forest-700"
          title="Nous livrons partout à Casablanca"
        >
          Une parfaite maîtrise des raccourcis et artères de la métropole pour éviter les
          embouteillages du boulevard Zerktouni à l’autoroute urbaine.
        </SectionHeading>

        <CasablancaCoverage />
      </div>
    </section>
  );
}
