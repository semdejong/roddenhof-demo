import Link from "next/link";
import CtaRow from "@/components/CtaRow";
import DisplayHeading from "@/components/DisplayHeading";
import Lamp from "@/components/Lamp";
import ServiceWall from "@/components/ServiceWall";
import WallSwatch from "@/components/WallSwatch";
import { content } from "@/content";

export default function Home() {
  const { home, homeExtra, buildings, services, motto, company, werkwijze, profile } = content;
  return (
    <>
      <section data-section="hero" className="grid items-end gap-12 pb-24 pt-12 min-[1120px]:pb-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.7fr)] lg:pt-16">
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

      <section data-section="vak" className="pb-16">
        <p className="meta text-sm">{homeExtra.tradeLabel}</p>
        <ul className="mt-6">
          {homeExtra.trades.map((trade, index) => (
            <li key={trade.word} className="border-t border-schaduw py-5">
              {index === 1 ? <Lamp className="mb-4" /> : null}
              <Link href={trade.href} className="link font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-none">
                {trade.word}
              </Link>
              <p className="mt-3 max-w-[36rem]">{trade.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[38rem]">{homeExtra.tradeLine}</p>
      </section>

      <section data-section="kanten" className="pb-16">
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none">{homeExtra.sidesTitle}</h2>
        <div className="mt-6 grid md:grid-cols-2">
          {homeExtra.sides.map((side, index) => (
            <Link
              key={side.href}
              href={side.href}
              className={`block min-h-44 border border-schaduw p-6 ${index === 1 ? "bg-kalk md:border-l-0" : ""}`}
            >
              {index === 1 ? (
                <Lamp className="bleed-x -mt-6 mb-6" />
              ) : (
                <Lamp className="lamp-dim bleed-x -mt-6 mb-6" />
              )}
              <p className="meta text-sm">{side.kicker}</p>
              <p className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{side.title}</p>
              <p className="mt-4 max-w-[28rem]">{side.text}</p>
            </Link>
          ))}
        </div>
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
                  index % 3 === 0 ? "text-[clamp(2rem,4vw,3.3rem)]" : "text-[clamp(1.45rem,2.4vw,2.15rem)]"
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
        <p className="meta text-sm">Ons motto</p>
        <ol className="mt-6">
          {motto.lines.map((line, index) => (
            <li key={line} className="border-t border-schaduw py-4">
              {index === 1 ? <Lamp className="mb-4" /> : null}
              <p className="font-display text-[clamp(2rem,5vw,3.6rem)] leading-none">{line}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-[40rem]">{motto.full}</p>
        <p className="mt-4 max-w-[40rem]">{motto.follow}</p>
        <p className="mt-4 max-w-[40rem]">Wij richten ons zowel op de particuliere als op de zakelijke markt.</p>
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

      <section data-section="staat-voor" className="pb-16">
        <p className="meta text-sm">Roddenhof staat voor</p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {werkwijze.standFor.map((item) => (
            <li key={item.word} className="border-t border-schaduw pt-4">
              <p className="font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-none">{item.word}</p>
              <p className="mt-3 max-w-[28rem]">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[40rem]">{profile.workshop}</p>
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
