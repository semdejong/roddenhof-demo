"use client";

import { useState } from "react";
import Field from "@/components/Field";
import { content } from "@/content";
import { mailtoHref } from "@/lib/mailto";

type Errors = Partial<Record<"naam" | "telefoon" | "email" | "bericht", string>>;

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const { contact, mailtoNote } = content;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();
    const next: Errors = {};
    if (!naam) next.naam = "Vul uw naam in.";
    if (!telefoon) next.telefoon = "Vul uw telefoonnummer in.";
    if (!validEmail(email)) next.email = "Vul een geldig e-mailadres in.";
    if (!bericht) next.bericht = "Schrijf uw bericht.";
    setErrors(next);
    const first = (Object.keys(next) as Array<keyof Errors>)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    const body = ["Goedendag,", "", `Naam: ${naam}`, `Telefoon: ${telefoon}`, `E-mail: ${email}`, "", bericht].join("\r\n");
    window.location.href = mailtoHref(contact.subject, body);
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5" data-section="contactformulier">
      <Field id="naam" name="naam" label="Naam" autoComplete="name" required error={errors.naam} />
      <Field id="telefoon" name="telefoon" label="Telefoon" type="tel" autoComplete="tel" required error={errors.telefoon} />
      <Field id="email" name="email" label="E-mail" type="email" autoComplete="email" required error={errors.email} />
      <Field id="bericht" name="bericht" label="Bericht" required multiline error={errors.bericht} />
      <p className="max-w-[40rem] text-[1.0625rem]">{mailtoNote}</p>
      <button type="submit" data-cta="mailen" className="btn btn-rood w-full sm:w-auto">
        {contact.submit}
      </button>
    </form>
  );
}
