"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { content } from "@/content";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const { company, nav } = content;
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (open && !wasOpen.current) {
      firstLinkRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="band-donker sticky top-0 z-50 bg-inkt" data-section="header">
      <div className="flex items-stretch">
        <Link
          href="/"
          className="plaat flex shrink-0 items-center bg-kalk px-2.5 min-[1120px]:w-[var(--rail)] min-[1120px]:justify-center min-[1120px]:px-4"
        >
          <Image
            src={company.logo}
            alt={company.logoAlt}
            width={711}
            height={229}
            priority
            className="h-16 w-auto min-[1120px]:h-[76px]"
          />
        </Link>
        <nav className="hidden min-w-0 flex-1 items-stretch justify-end min-[1120px]:flex" aria-label="Hoofdmenu">
          <ul className="flex flex-nowrap items-stretch">
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href} className="flex">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`nav-link relative flex items-center whitespace-nowrap px-2 text-[0.8125rem] min-[1280px]:px-2.5 min-[1280px]:text-sm ${
                      current ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {current ? (
                      <span className="absolute inset-x-2 top-0 h-[3px] bg-oranje" aria-hidden="true" />
                    ) : null}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="ml-auto flex shrink-0 items-stretch min-[1120px]:ml-0">
          <a
            href={company.phoneTel}
            data-cta="bellen"
            className="btn-rood flex items-center whitespace-nowrap px-3 text-[1rem] font-semibold sm:px-4 sm:text-[1.0625rem]"
          >
            Bellen
            <span className="meta ml-2 hidden font-medium min-[1380px]:inline">{company.phoneDisplay}</span>
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="min-w-11 px-3 text-[1rem] font-semibold text-kalk min-[1120px]:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Sluit" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobiel-menu" className="min-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/15 bg-inkt min-[1120px]:hidden" aria-label="Mobiel menu">
          <ul>
            {nav.map((item, index) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`nav-link flex min-h-12 items-center border-b border-white/10 border-l-[3px] px-5 text-[1.125rem] ${
                      current ? "border-l-oranje font-semibold" : "border-l-transparent font-medium"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
