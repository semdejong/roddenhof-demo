import type { Metadata } from "next";
import Link from "next/link";
import CtaRow from "@/components/CtaRow";
import PageHeader from "@/components/PageHeader";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina bestaat niet op de conceptsite van Schildersbedrijf Roddenhof.",
};

export default function NotFound() {
  return (
    <article data-section="niet-gevonden" className="pb-16">
      <PageHeader title={content.notFound.h1} lede={content.notFound.text} />
      <p className="max-w-[36rem]">Het werk dat wel op deze site staat:</p>
      <ul className="mt-6 max-w-[36rem]">
        {content.services.map((service) => (
          <li key={service.href} className="border-t border-schaduw py-3">
            <Link href={service.href} className="link font-display text-[clamp(1.5rem,3vw,2rem)] leading-none">
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <Link href="/" className="link inline-flex min-h-11 items-center">
          Naar de startpagina
        </Link>
      </p>
      <CtaRow className="mt-6" />
    </article>
  );
}
