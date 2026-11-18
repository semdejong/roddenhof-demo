import type { Metadata, Viewport } from "next";
import { Golos_Text, Ubuntu_Sans_Mono, Young_Serif } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SleadsBadge from "@/components/SleadsBadge";
import StickyBar from "@/components/StickyBar";

const young = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-young",
  display: "swap",
});

const golos = Golos_Text({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-golos",
  display: "swap",
});

const mono = Ubuntu_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: `%s | ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: { icon: content.company.logo },
};

export const viewport: Viewport = { themeColor: content.colors.inkt };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--rood": c.rood,
  "--oranje": c.oranje,
  "--muur": c.muur,
  "--kalk": c.kalk,
  "--schaduw": c.schaduw,
  "--inkt": c.inkt,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${young.variable} ${golos.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#inhoud" className="skip-link">
          Ga naar inhoud
        </a>
        <SiteHeader />
        <main id="inhoud" className="page-inset flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
