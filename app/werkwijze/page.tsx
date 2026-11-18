import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import Lamp from "@/components/Lamp";
import PageHeader from "@/components/PageHeader";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Werkwijze",
  description: content.werkwijze.seoDescription,
};

export default function WerkwijzePage() {
  const { werkwijze } = content;
  return (
    <article data-section="werkwijze" className="pb-16">
      <PageHeader title={werkwijze.h1} lede={werkwijze.lede} />
      <div className="max-w-[42rem]">
        {werkwijze.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-5">
            {paragraph}
          </p>
        ))}
      </div>

      <section className="mt-14" data-section="uitgangspunten">
        <Lamp />
        <h2 className="mt-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{werkwijze.basesTitle}</h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {werkwijze.bases.map((base, index) => (
            <li key={base.title} className="border-t border-schaduw pt-4">
              <p className="meta text-sm">0{index + 1}</p>
              <h3 className="mt-2 font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-none">{base.title}</h3>
              <p className="mt-3">{base.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16" data-section="gang">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{werkwijze.pathTitle}</h2>
        <ol className="mt-6">
          {werkwijze.path.map((step, index) => (
            <li key={step.title} className="grid gap-2 border-t border-schaduw py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
              <p className="meta text-sm">0{index + 1}</p>
              <div>
                <h3 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-none">{step.title}</h3>
                <p className="mt-3 max-w-[38rem]">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 border border-schaduw bg-kalk px-5 py-8 sm:px-8" data-section="garantie-detail">
        <h2 className="flex items-center gap-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-none">
          <span className="inline-block h-3 w-3 shrink-0 rotate-45 bg-oranje" aria-hidden="true" />
          Drie partijen
        </h2>
        <p className="mt-5 max-w-[40rem]">{werkwijze.garantieIntro}</p>
        <ol className="mt-8">
          {werkwijze.partners.map((partner) => (
            <li key={partner.index} className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-baseline gap-3 border-t border-schaduw py-4">
              <span className="meta text-sm">{partner.index}</span>
              <span className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-none">{partner.name}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">Roddenhof staat voor</h2>
        <p className="mt-4 max-w-[40rem]">{werkwijze.standForLead}</p>
        <ul className="mt-6">
          {werkwijze.standFor.map((item) => (
            <li key={item.word} className="grid gap-2 border-t border-schaduw py-5 sm:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1fr)] sm:items-baseline sm:gap-8">
              <p className="font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-none">{item.word}</p>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaRow className="mt-10" />
    </article>
  );
}
