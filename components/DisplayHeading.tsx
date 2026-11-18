import type { ReactNode } from "react";

type Tag = "h1" | "h2" | "p";

export default function DisplayHeading({
  as: Tag = "h1",
  children,
  className = "",
  id,
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={`display ${className}`}>
      {children}
    </Tag>
  );
}
