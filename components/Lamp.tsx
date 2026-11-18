export default function Lamp({
  sweep = false,
  className = "",
}: {
  sweep?: boolean;
  className?: string;
}) {
  return (
    <div className={`lamp ${sweep ? "lamp-sweep" : ""} ${className}`} aria-hidden="true">
      <span className="lamp-core" />
      <span className="lamp-step lamp-step-a" />
      <span className="lamp-step lamp-step-b" />
    </div>
  );
}
