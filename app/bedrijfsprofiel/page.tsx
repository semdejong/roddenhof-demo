import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import DisplayHeading from "@/components/DisplayHeading";
import PageHeader from "@/components/PageHeader";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Bedrijfsprofiel",
  description: content.profile.seoDescription,
};

export default function ProfielPage() {
  const { profile, company, motto } = content;
  return (
    <article data-section="profiel" className="pb-16">
      <PageHeader title={profile.h1} lede={profile.lede} />
      <p className="meta text-sm">Schilder sinds {company.painterSince}</p>
      <p className="meta mt-1 text-sm">Opgericht in {company.founded}</p>
      <h2 className="mt-6 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-none">{company.owner}</h2>
      <div className="mt-6 max-w-[42rem]">
        {profile.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-4">
            {paragraph}
          </p>
        ))}
        <p>{company.ownerLine}</p>
      </div>

      <section className="mt-12">
        <p className="licht">Ons motto</p>
        <DisplayHeading as="p" className="mt-4 max-w-[16em] text-[clamp(2rem,4vw,3.3rem)]">
          {motto.short}
        </DisplayHeading>
        <p className="mt-6 max-w-[42rem]">{motto.full}</p>
        <p className="mt-4 max-w-[42rem]">{motto.follow}</p>
      </section>

      <address className="mt-10 not-italic">
        <p className="meta text-sm">{company.place}</p>
        <a href={company.phoneTel} data-cta="bellen" className="meta mt-3 block text-[1.8rem] leading-none text-inkt">
          {company.phoneDisplay}
        </a>
        <a href={company.mailto} data-cta="mailen" className="link mt-3 inline-flex min-h-11 items-center">
          {company.email}
        </a>
      </address>
      <CtaRow className="mt-8" />
    </article>
  );
}
