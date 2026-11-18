import Link from "next/link";
import Lamp from "@/components/Lamp";
import type { Service } from "@/content";
import { content } from "@/content";

function Coat({ service }: { service: Service }) {
  return (
    <ol className="mt-6">
      {service.steps.map((step, index) => (
        <li key={step.title} className="coat-layer">
          <p className="meta text-sm">0{index + 1}</p>
          <h3 className="mt-1 font-display text-[clamp(1.5rem,2.5vw,1.9rem)] leading-none">{step.title}</h3>
          <p className="mt-2 max-w-[36rem]">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

function BuildingLines() {
  return (
    <ul className="mt-6">
      {content.buildings.map((building, index) => (
        <li key={building} className="border-t border-schaduw py-2">
          <p
            className={`font-display leading-none ${
              index % 3 === 0 ? "text-[clamp(1.8rem,3.2vw,2.6rem)]" : "text-[clamp(1.3rem,2.2vw,1.75rem)]"
            }`}
          >
            {building}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceScene({ service }: { service: Service }) {
  const { werkwijze } = content;

  if (service.slug === "buitenschilderwerk") {
    return (
      <section className="border-t border-schaduw py-12" data-section="lagen">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">Laag op laag</h2>
        <p className="mt-4 max-w-[38rem]">
          Buitenschilderwerk volgt de ondergrond. Eerst wat loszit, dan schuren, dan de grondlaag, dan de aflak.
        </p>
        <Coat service={service} />
        <h2 className="mt-14 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">In Het Vechtdal</h2>
        <p className="mt-4 max-w-[38rem]">{content.home.paragraphs[1]}</p>
        <Lamp className="mt-8" />
        <BuildingLines />
      </section>
    );
  }

  if (service.slug === "wandafwerking") {
    return (
      <section className="border-t border-schaduw py-12" data-section="muur">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">Langs de wand</h2>
        <p className="mt-4 max-w-[38rem]">
          Een wand toont zich als het licht er vlak langs strijkt. Oneffenheden eerst, daarna grond en afwerking. Binnenschilderwerk hoort hierbij.
        </p>
        <ol className="mt-8">
          {service.steps.map((step, index) => (
            <li key={step.title} className="py-4">
              {index === 1 ? <Lamp className="mb-4" /> : <Lamp className="lamp-dim mb-4" />}
              <p className="meta text-sm">0{index + 1}</p>
              <h3 className="mt-1 font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-none">{step.title}</h3>
              <p className="mt-2 max-w-[36rem]">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (service.slug === "houtwerk") {
    return (
      <section className="border-t border-schaduw py-12" data-section="houtvlak">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">Hout aan twee kanten</h2>
        <div className="mt-6 grid md:grid-cols-2">
          <div className="border border-schaduw p-6">
            <Lamp className="lamp-dim bleed-x -mt-6 mb-6" />
            <p className="meta text-sm">Binnen</p>
            <p className="mt-3 font-display text-[clamp(1.7rem,3vw,2.3rem)] leading-none">Bij het interieur</p>
            <p className="mt-4">Deuren en betimmeringen die bij het schilderwerk binnen horen.</p>
            <Link href="/wandafwerking" className="link mt-4 inline-flex min-h-11 items-center">
              Wandafwerking
            </Link>
          </div>
          <div className="border border-schaduw bg-kalk p-6 md:border-l-0">
            <Lamp className="bleed-x -mt-6 mb-6" />
            <p className="meta text-sm">Buiten</p>
            <p className="mt-3 font-display text-[clamp(1.7rem,3vw,2.3rem)] leading-none">Aan het gebouw</p>
            <p className="mt-4">Kozijnen en ander hout aan de buitenzijde, in dezelfde volgorde: schuren, gronden, aflakken.</p>
            <Link href="/buitenschilderwerk" className="link mt-4 inline-flex min-h-11 items-center">
              Buitenschilderwerk
            </Link>
          </div>
        </div>
        <Coat service={service} />
      </section>
    );
  }

  if (service.slug === "glaszetten") {
    return (
      <section className="border-t border-schaduw py-12" data-section="glasvlak">
        <Lamp className="max-w-[14rem]" />
        <p className="mt-5 max-w-[12ch] font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.98]">
          Plaatsen. Vervangen. Afwerken.
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {service.steps.map((step, index) => (
            <li key={step.title} className="border-t border-schaduw pt-4">
              <p className="meta text-sm">0{index + 1}</p>
              <h3 className="mt-2 font-display text-[1.7rem] leading-none">{step.title}</h3>
              <p className="mt-3">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-[38rem]">
          Glas staat vaak in hetzelfde kozijn als het houtwerk. U kunt het apart vragen, of samen met dat schilderwerk.
        </p>
        <p className="mt-4">
          <Link href="/houtwerk" className="link inline-flex min-h-11 items-center">
            Meer over houtwerk
          </Link>
        </p>
      </section>
    );
  }

  return (
    <section className="border-t border-schaduw py-12" data-section="later">
      <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{werkwijze.pathTitle}</h2>
      <ol className="mt-6">
        {werkwijze.path.map((step, index) => (
          <li key={step.title} className="grid gap-2 border-t border-schaduw py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6">
            <p className="meta text-sm">0{index + 1}</p>
            <div>
              {index === 3 ? <Lamp className="mb-3" /> : null}
              <h3 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-none">{step.title}</h3>
              <p className="mt-2 max-w-[36rem]">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-none">
        Utiliteitswerken en nieuwbouw
      </p>
      <p className="mt-4 max-w-[38rem]">{content.home.paragraphs[2]}</p>
      <Coat service={service} />
    </section>
  );
}
