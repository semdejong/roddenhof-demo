import { content } from "@/content";

export default function CtaRow({ className = "", stack = false }: { className?: string; stack?: boolean }) {
  const { company } = content;
  return (
    <div className={`flex flex-col gap-3 ${stack ? "" : "sm:flex-row sm:flex-wrap"} ${className}`}>
      <a href="/offerte" data-cta="offerte" className={`btn btn-rood ${stack ? "w-full" : "w-full sm:w-auto"}`}>
        Offerte aanvragen
      </a>
      <a href={company.phoneTel} data-cta="bellen" className={`btn btn-lijn ${stack ? "w-full" : "w-full sm:w-auto"}`}>
        Bellen
        <span className="meta text-[1rem]">{company.phoneDisplay}</span>
      </a>
    </div>
  );
}
