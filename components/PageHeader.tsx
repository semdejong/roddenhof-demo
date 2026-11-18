import DisplayHeading from "@/components/DisplayHeading";
import Lamp from "@/components/Lamp";

export default function PageHeader({
  title,
  lede,
  label,
}: {
  title: string;
  lede?: string;
  label?: string;
}) {
  return (
    <header className="pb-8 pt-12 sm:pt-16">
      {label ? <p className="licht">{label}</p> : null}
      <div className={`page-measure ${label ? "mt-3" : ""}`}>
        <Lamp sweep />
        <DisplayHeading className="text-[1em]">{title}</DisplayHeading>
        <span className="tick" aria-hidden="true" />
      </div>
      {lede ? <p className="mt-6 max-w-[40rem]">{lede}</p> : null}
    </header>
  );
}
