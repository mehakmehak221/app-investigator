"use client";

import { CALENDLY_URL } from "@/lib/constants";
import type { ComponentProps } from "react";

type CalendlyLinkProps = Omit<ComponentProps<"a">, "href" | "target" | "rel">;

export function CalendlyLink({ children, ...props }: CalendlyLinkProps) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
