import type { Metadata } from "next";
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
        </address>
        <div>
          <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-none">{contact.formTitle}</h2>
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
