import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: content.contact.seoDescription,
};

export default function ContactPage() {
  const { contact, company } = content;
  return (
    <article data-section="contact" className="pb-16">
      <PageHeader title={contact.h1} lede={contact.lede} />
      <section className="mb-14" data-section="aanleiding">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{contact.reasonsTitle}</h2>
        <ul className="mt-6 grid gap-8 md:grid-cols-3">
          {contact.reasons.map((reason, index) => (
            <li key={reason.title} className="border-t border-schaduw pt-4">
              <p className="meta text-sm">0{index + 1}</p>
              <h3 className="mt-2 font-display text-[1.6rem] leading-none">{reason.title}</h3>
              <p className="mt-3">{reason.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <address className="not-italic">
          <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{company.name}</p>
          <p className="meta mt-4 text-sm">{company.place}</p>
          <a href={company.phoneTel} data-cta="bellen" className="meta mt-6 block text-[clamp(1.8rem,3vw,2.4rem)] leading-none text-inkt">
            {company.phoneDisplay}
          </a>
          <a href={company.mailto} data-cta="mailen" className="link mt-4 inline-flex min-h-11 items-center">
            {company.email}
          </a>
          <p className="mt-8 max-w-[22rem] font-display text-[clamp(1.4rem,2.4vw,1.8rem)] leading-[1.2]">{content.motto.short}</p>
          <p className="mt-4">
            <Link href="/werkwijze" className="link inline-flex min-h-11 items-center">
              Service en kwaliteit
            </Link>
          </p>
        </address>
        <div>
          <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-none">{contact.formTitle}</h2>
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
