import { content } from "@/content";

/** Opent het mailprogramma. Er gaat geen verzoek naar een server. */
export function mailtoHref(subject: string, body: string): string {
  return `mailto:${content.company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
