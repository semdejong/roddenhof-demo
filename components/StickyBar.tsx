import Lamp from "@/components/Lamp";
import { content } from "@/content";

export default function StickyBar() {
  const { company } = content;
  return (
    <div className="sticky-bar fixed inset-x-0 bottom-0 z-40 bg-kalk min-[1120px]:hidden" data-section="sticky">
      <Lamp />
      <div className="grid grid-cols-2">
        <a
          href={company.phoneTel}
          data-cta="bellen"
          className="flex h-14 items-center justify-center border-r border-schaduw text-[1.0625rem] font-semibold"
        >
          Bellen
        </a>
        <a
          href="/offerte"
          data-cta="offerte"
          className="btn-rood flex h-14 items-center justify-center text-[1.0625rem] font-semibold"
        >
          Offerte
        </a>
      </div>
    </div>
  );
}
