/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads, bekijk sleads.nl"
      className="sleads-badge print:hidden"
    >
      <span className="inline-block h-1.5 w-1.5 shrink-0 bg-rood" aria-hidden="true" />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
