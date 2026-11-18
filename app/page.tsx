import Link from "next/link";
import CtaRow from "@/components/CtaRow";
import DisplayHeading from "@/components/DisplayHeading";
import Lamp from "@/components/Lamp";
import ServiceWall from "@/components/ServiceWall";
import WallSwatch from "@/components/WallSwatch";
import { content } from "@/content";

export default function Home() {
  const { home, buildings, services, motto, company, werkwijze } = content;
  return (
    <>
      <section data-section="hero" className="grid items-end gap-12 pb-16 pt-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.7fr)] lg:pt-16">
        <div className="rise">
          <div className="hero-measure">
            <Lamp sweep />
            <DisplayHeading className="text-[1em]">{home.h1}</DisplayHeading>
            <span className="tick" aria-hidden="true" />
          </div>
          <p className="mt-6 max-w-[40rem]">{home.paragraphs[0]}</p>
          <CtaRow className="mt-8" />
        </div>
        <WallSwatch />
      </section>

      <section data-section="werkgebied" className="pb-16">
        <Lamp />
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none">Waar wij werken</h2>
            <p className="mt-5">{home.paragraphs[1]}</p>
            <p className="mt-4">{home.paragraphs[2]}</p>
            <p className="mt-4">{home.paragraphs[3]}</p>
          </div>
          <ul>
            {buildings.map((building, index) => (
              <li
                key={building}
                className={`border-t border-schaduw py-2 font-display leading-none ${
                  index % 3 === 0
                    ? "text-[clamp(2rem,4vw,3.3rem)]"
                    : "pl-6 text-[clamp(1.45rem,2.4vw,2.15rem)] sm:pl-10"
                }`}
              >
                {building}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="diensten" className="pb-8">
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none">Ons werk bestaat uit</h2>
        <ServiceWall
          items={services.map((service) => ({
            href: service.href,
            title: service.title,
            summary: service.summary,
            linkLabel: service.linkLabel,
          }))}
        />
      </section>

      <section data-section="motto" className="py-16">
        <Lamp />
        <p className="licht mt-6">Ons motto</p>
        <DisplayHeading as="p" className="mt-4 max-w-[16em] text-[clamp(2rem,4.2vw,3.5rem)]">
          {motto.short}
        </DisplayHeading>
        <p className="mt-6 max-w-[40rem]">Wij richten ons zowel op de particuliere als op de zakelijke markt.</p>
        <p className="mt-5">
          <Link href="/bedrijfsprofiel" className="link inline-flex min-h-11 items-center">
            Lees het bedrijfsprofiel
          </Link>
        </p>
      </section>

      <section data-section="garantie" className="pb-16">
        <Lamp />
        <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] leading-none">Drie partijen</h2>
        <p className="mt-5 max-w-[40rem]">{werkwijze.garantieIntro}</p>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {werkwijze.partners.map((partner) => (
            <li key={partner.index} className="border-t border-schaduw pt-3">
              <p className="meta text-sm">{partner.index}</p>
              <p className="mt-2 font-display text-[1.7rem] leading-none">{partner.name}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          <Link href="/werkwijze" className="link inline-flex min-h-11 items-center">
            Service en kwaliteit
          </Link>
        </p>
      </section>

      <section data-section="afsluiting" className="pb-16">
        <Lamp />
        <p className="mt-6 max-w-[36rem] font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.15]">{home.paragraphs[4]}</p>
        <p className="meta mt-4 text-sm">{company.place}</p>
        <CtaRow className="mt-6" />
      </section>
    </>
  );
}
