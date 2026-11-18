"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Lamp from "@/components/Lamp";

type Item = {
  href: string;
  title: string;
  summary: string;
  linkLabel: string;
};

export default function ServiceWall({ items }: { items: Item[] }) {
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wallRef.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.style.setProperty("--lamp", "18%");
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const start = window.innerHeight * 0.82;
      const span = rect.height + window.innerHeight * 0.2;
      const progress = (start - rect.top) / span;
      const clamped = Math.min(0.92, Math.max(0.04, progress));
      node.style.setProperty("--lamp", `${clamped * 100}%`);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wallRef} className="relative mt-8">
      <div className="wall-lamp">
        <Lamp />
      </div>
      <ul className="relative z-[1]">
        {items.map((item) => (
          <li key={item.href} className="service-course mt-3 border-t border-schaduw px-0 py-4 first:mt-0">
            <div className="grid items-start gap-2 sm:grid-cols-[minmax(12rem,16rem)_minmax(0,1fr)] sm:gap-x-8 lg:grid-cols-[minmax(14rem,18rem)_minmax(0,1fr)_auto] lg:items-center">
              <h3 className="font-display text-[clamp(1.35rem,2vw,1.65rem)] leading-[1.15]">{item.title}</h3>
              <p className="text-[1.0625rem] leading-[1.6]">{item.summary}</p>
              <Link href={item.href} className="link inline-flex min-h-11 items-center sm:col-span-2 lg:col-span-1">
                {item.linkLabel}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
