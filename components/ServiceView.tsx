import Link from "next/link";
import CtaRow from "@/components/CtaRow";
import Lamp from "@/components/Lamp";
import PageHeader from "@/components/PageHeader";
import ServiceScene from "@/components/ServiceScene";
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
          <figure className="mt-10 max-w-[34rem]">
            <Lamp />
            <blockquote className="mt-4 font-display text-[clamp(1.55rem,2.6vw,2.05rem)] leading-[1.25]">
              {service.notes[service.slug === "glaszetten" || service.slug === "renovatie-en-onderhoud" ? 2 : 0]}
            </blockquote>
          </figure>
        </div>
        <aside className="h-fit border border-schaduw bg-kalk p-5">
          <p className="font-display text-[1.8rem] leading-none">Vrijblijvend</p>
          <p className="mt-4 text-[1.0625rem]">Voor een vrijblijvende offerte en advies kunt u met ons contact opnemen.</p>
          <CtaRow stack className="mt-5" />
          <p className="meta mt-6 text-sm">{content.company.place}</p>
        </aside>
      </div>
      <ServiceScene service={service} />
      <div className="border-t border-schaduw py-10">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-none">Ook in ons werk</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {others.map((item) => (
            <li key={item.href} className="border-t border-schaduw pt-4">
              <p className="meta text-sm">{item.licht}</p>
              <Link
                href={item.href}
                className="mt-2 inline-flex min-h-11 items-center font-display text-[1.7rem] leading-none text-inkt underline decoration-rood decoration-1 underline-offset-[0.2em]"
              >
                {item.title}
              </Link>
              <p className="mt-3">{item.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
