import type { Metadata } from "next";
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
      <p className="meta mb-8 text-sm">
        <a href={company.phoneTel} data-cta="bellen" className="text-inkt">
          {company.phoneDisplay}
        </a>
        <span aria-hidden="true"> · </span>
        <a href={company.mailto} data-cta="mailen" className="link">
          {company.email}
        </a>
      </p>
      <div className="max-w-3xl">
        <QuoteForm />
      </div>
    </article>
  );
}
