"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ContactFormModal } from "./ContactFormModal";

type ContactFormContextValue = {
  openContactForm: () => void;
  closeContactForm: () => void;
  isOpen: boolean;
};

const ContactFormContext = createContext<ContactFormContextValue | null>(null);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = useCallback(() => setIsOpen(true), []);
  const closeContactForm = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openContactForm, closeContactForm, isOpen }),
    [openContactForm, closeContactForm, isOpen],
  );

  return (
    <ContactFormContext.Provider value={value}>
      {children}
      <ContactFormModal open={isOpen} onClose={closeContactForm} />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const ctx = useContext(ContactFormContext);
  if (!ctx) {
    throw new Error("useContactForm must be used within ContactFormProvider");
  }
  return ctx;
}
