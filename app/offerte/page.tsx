import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Offerte",
  description: content.offerte.seoDescription,
};

export default function OffertePage() {
  const { offerte, company } = content;
  return (
    <article data-section="offerte" className="pb-16">
      <PageHeader title={offerte.h1} lede={offerte.lede} />
      <p className="meta mb-8 flex flex-wrap items-center gap-x-3 text-sm">
        <a href={company.phoneTel} data-cta="bellen" className="inline-flex min-h-11 items-center text-inkt">
          {company.phoneDisplay}
        </a>
        <span aria-hidden="true">·</span>
        <a href={company.mailto} data-cta="mailen" className="link inline-flex min-h-11 items-center">
          {company.email}
        </a>
      </p>
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)]">
        <div className="lg:order-2">
          <QuoteForm />
        </div>
        <aside className="lg:order-1">
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] leading-none">{offerte.hintsTitle}</h2>
          <ul className="mt-6">
            {offerte.hints.map((hint) => (
              <li key={hint.title} className="border-t border-schaduw py-4">
                <h3 className="font-display text-[1.45rem] leading-none">{hint.title}</h3>
                <p className="mt-2 text-[1.0625rem]">{hint.text}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <section className="mt-16 border-t border-schaduw pt-10" data-section="werk-op-offerte">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-none">Ons werk bestaat uit</h2>
        <p className="mt-4 max-w-[36rem]">
          Vink in het formulier wat van toepassing is. Hieronder staat hetzelfde werk, uitgeschreven.
        </p>
        <ul className="mt-6">
          {content.services.map((service) => (
            <li key={service.href} className="grid gap-2 border-t border-schaduw py-4 sm:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1fr)] sm:items-baseline sm:gap-8">
              <Link href={service.href} className="inline-flex min-h-11 items-center font-display text-[clamp(1.4rem,2.5vw,1.8rem)] leading-none text-inkt underline decoration-rood decoration-1 underline-offset-[0.2em]">
                {service.title}
              </Link>
              <p>{service.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
