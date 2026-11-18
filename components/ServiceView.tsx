import Link from "next/link";
import CtaRow from "@/components/CtaRow";
import PageHeader from "@/components/PageHeader";
import type { Service } from "@/content";
import { content } from "@/content";

export default function ServiceView({ service }: { service: Service }) {
  const others = content.services.filter((item) => item.slug !== service.slug);
  return (
    <article data-section={service.slug}>
      <PageHeader title={service.title} lede={service.lede} label={service.licht} />
      <div className="grid gap-12 pb-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)]">
        <div className="max-w-[42rem]">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-5">
              {paragraph}
            </p>
          ))}
          <h2 className="mt-10 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{service.stepsTitle}</h2>
          <ol className="mt-6">
            {service.steps.map((step, index) => (
              <li key={step.title} className="border-t border-schaduw py-4">
                <p className="meta text-sm">0{index + 1}</p>
                <h3 className="mt-1 font-display text-[1.6rem] leading-none">{step.title}</h3>
                <p className="mt-2 max-w-[38rem] text-[1.0625rem]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <aside className="h-fit border border-schaduw bg-kalk p-5">
          <p className="font-display text-[1.8rem] leading-none">Vrijblijvend</p>
          <p className="mt-4 text-[1.0625rem]">Voor een vrijblijvende offerte en advies kunt u met ons contact opnemen.</p>
          <CtaRow className="mt-5" />
          <p className="meta mt-6 text-sm">{content.company.place}</p>
        </aside>
      </div>
      <div className="border-t border-schaduw py-10">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-none">Ook in ons werk</h2>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {others.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link inline-flex min-h-11 items-center">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
