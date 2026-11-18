"use client";

import { useState } from "react";
import Field from "@/components/Field";
import { content } from "@/content";
import { mailtoHref } from "@/lib/mailto";

type Errors = Partial<
  Record<"naam" | "telefoon" | "email" | "plaats" | "soort" | "ligging" | "markt" | "omschrijving", string>
>;

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const { offerte, mailtoNote } = content;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const plaats = String(data.get("plaats") ?? "").trim();
    const soorten = data.getAll("soort").map(String);
    const ligging = data.getAll("ligging").map(String);
    const markt = String(data.get("markt") ?? "").trim();
    const periode = String(data.get("periode") ?? "").trim();
    const omschrijving = String(data.get("omschrijving") ?? "").trim();
    const next: Errors = {};
    if (!naam) next.naam = "Vul uw naam in.";
    if (!telefoon) next.telefoon = "Vul uw telefoonnummer in.";
    if (!validEmail(email)) next.email = "Vul een geldig e-mailadres in.";
    if (!plaats) next.plaats = "Vul uw plaats in.";
    if (soorten.length === 0) next.soort = "Kies minstens één soort werk.";
    if (ligging.length === 0) next.ligging = "Geef aan of het om binnen, buiten of beide gaat.";
    if (!markt) next.markt = "Kies particulier of zakelijk.";
    if (!omschrijving) next.omschrijving = "Schrijf een korte omschrijving.";
    setErrors(next);
    const order: Array<keyof Errors> = ["naam", "telefoon", "email", "plaats", "soort", "ligging", "markt", "omschrijving"];
    const first = order.find((key) => next[key]);
    if (first) {
      const target = document.getElementById(first === "soort" || first === "ligging" || first === "markt" ? first : first);
      target?.focus();
      return;
    }

    const lines = [
      "Goedendag,",
      "",
      "Ik verzoek u om een vrijblijvende offerte.",
      "",
      `Naam: ${naam}`,
      `Telefoon: ${telefoon}`,
      `E-mail: ${email}`,
      `Plaats: ${plaats}`,
      `Soort werk: ${soorten.join(", ")}`,
      `Binnen of buiten: ${ligging.join(", ")}`,
      `Particulier of zakelijk: ${markt}`,
    ];
    if (periode) lines.push(`Gewenste periode: ${periode}`);
    lines.push("", "Omschrijving:", omschrijving);
    window.location.href = mailtoHref(offerte.subject, lines.join("\r\n"));
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-6" data-section="offerteformulier">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="naam" name="naam" label="Naam" autoComplete="name" required error={errors.naam} />
        <Field id="telefoon" name="telefoon" label="Telefoon" type="tel" autoComplete="tel" required error={errors.telefoon} />
        <Field id="email" name="email" label="E-mail" type="email" autoComplete="email" required error={errors.email} />
        <Field id="plaats" name="plaats" label="Plaats" autoComplete="address-level2" required error={errors.plaats} />
      </div>

      <fieldset>
        <legend className="field-label">
          {offerte.workLegend}
          <span aria-hidden="true"> *</span>
          <span className="sr-only"> (verplicht)</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {offerte.workTypes.map((item, index) => (
            <label key={item} className="choice">
              <input id={index === 0 ? "soort" : undefined} type="checkbox" name="soort" value={item} />
              <span>{item}</span>
            </label>
          ))}
        </div>
        {errors.soort ? (
          <p className="field-error" role="alert">
            {errors.soort}
          </p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="field-label">
          {offerte.placeLegend}
          <span aria-hidden="true"> *</span>
          <span className="sr-only"> (verplicht)</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {offerte.places.map((item, index) => (
            <label key={item} className="choice">
              <input id={index === 0 ? "ligging" : undefined} type="checkbox" name="ligging" value={item} />
              <span>{item}</span>
            </label>
          ))}
        </div>
        {errors.ligging ? (
          <p className="field-error" role="alert">
            {errors.ligging}
          </p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="field-label">
          {offerte.marketLegend}
          <span aria-hidden="true"> *</span>
          <span className="sr-only"> (verplicht)</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {offerte.markets.map((item, index) => (
            <label key={item} className="choice">
              <input id={index === 0 ? "markt" : undefined} type="radio" name="markt" value={item} />
              <span>{item}</span>
            </label>
          ))}
        </div>
        {errors.markt ? (
          <p className="field-error" role="alert">
            {errors.markt}
          </p>
        ) : null}
      </fieldset>

      <Field id="omschrijving" name="omschrijving" label="Korte omschrijving" required multiline error={errors.omschrijving} />
      <Field id="periode" name="periode" label="Gewenste periode (optioneel)" autoComplete="off" />

      <p className="max-w-[42rem] text-[1.0625rem]">{mailtoNote}</p>
      <button type="submit" data-cta="offerte" className="btn btn-rood w-full sm:w-auto">
        {offerte.submit}
      </button>
    </form>
  );
}
