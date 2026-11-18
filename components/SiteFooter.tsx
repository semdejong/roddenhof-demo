import Link from "next/link";
import Lamp from "@/components/Lamp";
import { content } from "@/content";

export default function SiteFooter() {
  const { company, nav } = content;
  return (
    <footer data-section="footer" className="page-inset pb-28 min-[1120px]:pb-12">
      <Lamp />
      <div className="grid gap-10 py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <p className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-none">{company.name}</p>
          <p className="meta mt-4 text-sm">{company.place}</p>
          <address className="mt-5 not-italic">
            <a href={company.phoneTel} data-cta="bellen" className="meta block text-[1.7rem] leading-none text-inkt">
              {company.phoneDisplay}
            </a>
            <a href={company.mailto} data-cta="mailen" className="link mt-3 inline-block">
              {company.email}
            </a>
          </address>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link inline-flex min-h-11 items-center">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="link inline-flex min-h-11 items-center">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-schaduw py-4 text-[1rem]">
        <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="link">
          Concept door Sleads
        </a>
      </p>
    </footer>
  );
}
