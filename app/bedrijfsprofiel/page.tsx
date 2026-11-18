import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import DisplayHeading from "@/components/DisplayHeading";
import Lamp from "@/components/Lamp";
import PageHeader from "@/components/PageHeader";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Bedrijfsprofiel",
  description: content.profile.seoDescription,
};

export default function ProfielPage() {
  const { profile, company, motto, buildings } = content;
  return (
    <article data-section="profiel" className="pb-16">
      <PageHeader title={profile.h1} lede={profile.lede} />

      <ul className="grid gap-px bg-schaduw sm:grid-cols-2">
        {profile.marks.map((mark) => (
          <li key={mark.year} className="bg-muur px-1 py-6 sm:px-6">
            <p className="meta text-sm">{mark.label}</p>
            <p className="mt-2 font-display text-[clamp(4.5rem,10vw,7.5rem)] leading-none">{mark.year}</p>
            <p className="mt-4 max-w-[28rem]">{mark.text}</p>
          </li>
        ))}
      </ul>

      <section className="mt-14" data-section="markten">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{company.owner}</h2>
        <p className="mt-4 max-w-[40rem]">{profile.paragraphs[1]}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {profile.markets.map((market) => (
            <div key={market.title} className="border-t border-schaduw pt-4">
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-none">{market.title}</h3>
              <p className="mt-3 max-w-[28rem]">{market.text}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {buildings.map((building) => (
            <li key={building} className="font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-none">
              {building}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border border-schaduw bg-kalk px-5 py-8 sm:px-8" data-section="werkplaats">
        <Lamp />
        <h2 className="mt-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{profile.workshopTitle}</h2>
        <p className="mt-4 max-w-[40rem]">{profile.workshop}</p>
      </section>

      <section className="mt-14">
        <p className="meta text-sm">Ons motto</p>
        <DisplayHeading as="p" className="mt-4 max-w-[16em] text-[clamp(2rem,4vw,3.3rem)]">
          {motto.short}
        </DisplayHeading>
        <p className="mt-6 max-w-[42rem]">{motto.full}</p>
        <p className="mt-4 max-w-[42rem]">{motto.follow}</p>
      </section>

      <address className="mt-10 flex flex-col items-start not-italic">
        <p className="meta text-sm">{company.place}</p>
        <a href={company.phoneTel} data-cta="bellen" className="meta mt-3 inline-flex min-h-11 items-center text-[1.8rem] leading-none text-inkt">
          {company.phoneDisplay}
        </a>
        <a href={company.mailto} data-cta="mailen" className="link mt-1 inline-flex min-h-11 items-center">
          {company.email}
        </a>
      </address>
      <CtaRow className="mt-8" />
    </article>
  );
}
