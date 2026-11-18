import type { Metadata } from "next";
import ServiceView from "@/components/ServiceView";
import { getService } from "@/content";

const service = getService("houtwerk");

export const metadata: Metadata = {
  title: service.title,
  description: service.seoDescription,
};

export default function Page() {
  return <ServiceView service={service} />;
}
