"use client";

import type { ComponentProps } from "react";
import { useContactForm } from "./ContactFormProvider";

type ContactFormTriggerProps = Omit<ComponentProps<"button">, "type">;

export function ContactFormTrigger({
  children,
  onClick,
  ...props
}: ContactFormTriggerProps) {
  const { openContactForm } = useContactForm();

  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        openContactForm();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
