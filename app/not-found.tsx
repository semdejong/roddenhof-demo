import type { Metadata } from "next";
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
      <CtaRow />
    </article>
  );
}
