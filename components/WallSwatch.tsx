/** Muurvlak: oneffenheden alleen zichtbaar waar de lamp strijkt. */
export default function WallSwatch() {
  return (
    <figure className="w-full max-w-[18rem] justify-self-end" aria-hidden="true">
      <svg viewBox="0 0 320 420" className="h-auto w-full border border-schaduw">
        <rect width="320" height="420" fill="#F4F1EC" />
        <rect x="26" y="42" width="128" height="2" fill="#EBE6E0" />
        <rect x="148" y="88" width="136" height="2" fill="#E9E4DE" />
        <rect x="40" y="128" width="72" height="2" fill="#EAE5DF" />
        <rect x="36" y="268" width="90" height="2" fill="#EAE5DF" />
        <rect x="110" y="318" width="150" height="2" fill="#E8E3DD" />
        <rect x="48" y="362" width="70" height="2" fill="#EBE6E0" />
        <rect x="0" y="176" width="320" height="3" fill="#DC5A36" />
        <rect x="0" y="179" width="320" height="7" fill="#E8D4CB" />
        <rect x="0" y="186" width="320" height="14" fill="#EFE6DF" />
        <rect x="26" y="181" width="128" height="2" fill="#C2B1A4" />
        <rect x="186" y="182" width="46" height="2" fill="#BBA99B" />
        <rect x="168" y="188" width="112" height="2" fill="#CBBBAE" />
        <rect x="44" y="194" width="68" height="2" fill="#B7A597" />
      </svg>
      <figcaption className="licht mt-3">Inspectie</figcaption>
    </figure>
  );
}
