import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: content.privacy.seoDescription,
};

export default function PrivacyPage() {
  const { privacy, company } = content;
  return (
    <article data-section="privacy" className="pb-16">
      <PageHeader title={privacy.h1} />
      <div className="max-w-[42rem]">
        {privacy.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-5">
            {paragraph}
          </p>
        ))}
        <p>
          <a href={company.phoneTel} data-cta="bellen" className="link">
            {company.phoneDisplay}
          </a>
          <span aria-hidden="true"> · </span>
          <a href={company.mailto} data-cta="mailen" className="link">
            {company.email}
          </a>
        </p>
        <p className="mt-4">
          <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="link">
            Sleads
          </a>
        </p>
      </div>
    </article>
  );
}
