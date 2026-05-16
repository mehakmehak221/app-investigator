"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import {
  HotCakeApiError,
  submitHotCakeForm,
  type HotCakeFormData,
} from "@/lib/hotcake-api";

const emptyForm: HotCakeFormData = {
  name: "",
  companyName: "",
  email: "",
  mobile: "",
  message: "",
};

const fieldLabels: Record<keyof HotCakeFormData, string> = {
  name: "Full name",
  companyName: "Company",
  email: "Work email",
  mobile: "Mobile number",
  message: "Message",
};

type ContactFormProps = {
  onSuccess?: () => void;
  className?: string;
};

export function ContactForm({ onSuccess, className = "" }: ContactFormProps) {
  const [form, setForm] = useState<HotCakeFormData>(emptyForm);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const updateField = (key: keyof HotCakeFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setSubmitError("");
  };

  const validateClient = (): boolean => {
    const errors: Record<string, string> = {};

    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.companyName.trim()) errors.companyName = "Company is required";
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!form.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10,15}$/.test(form.mobile.replace(/\s/g, ""))) {
      errors.mobile = "Enter a valid mobile number (10–15 digits)";
    }
    if (!form.message.trim()) {
      errors.message = "Message is required";
    } else if (form.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateClient()) return;

    setStatus("loading");
    setSubmitError("");

    try {
      await submitHotCakeForm({
        name: form.name.trim(),
        companyName: form.companyName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.replace(/\s/g, ""),
        message: form.message.trim(),
      });
      setStatus("success");
      setForm(emptyForm);
      onSuccess?.();
    } catch (err) {
      setStatus("idle");
      if (err instanceof HotCakeApiError) {
        setFieldErrors(err.fieldErrors);
        setSubmitError(err.message);
      } else {
        setSubmitError("Unable to submit right now. Please try again.");
      }
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className={`form-success ${className}`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <CheckCircle2 className="h-12 w-12 text-emerald-400" />
        <h3 className="mt-4 text-xl font-semibold text-zinc-50">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
          We received your message and will get back to you shortly.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6 px-5 py-2.5 text-sm"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${className}`} noValidate>
      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {(Object.keys(fieldLabels) as (keyof HotCakeFormData)[]).map((key) => {
          const isFullWidth = key === "message";
          return (
            <motion.div
              key={key}
              className={isFullWidth ? "sm:col-span-2" : ""}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label htmlFor={key} className="form-label">
                {fieldLabels[key]}
              </label>
              {key === "message" ? (
                <textarea
                  id={key}
                  name={key}
                  rows={4}
                  value={form[key]}
                  onChange={(e) => updateField(key, e.target.value)}
                  className={`form-input form-textarea ${fieldErrors[key] ? "form-input-error" : ""}`}
                  placeholder="Tell us about your app, crash issues, or what you need..."
                  disabled={status === "loading"}
                />
              ) : (
                <input
                  id={key}
                  name={key}
                  type={key === "email" ? "email" : key === "mobile" ? "tel" : "text"}
                  value={form[key]}
                  onChange={(e) => updateField(key, e.target.value)}
                  className={`form-input ${fieldErrors[key] ? "form-input-error" : ""}`}
                  placeholder={
                    key === "name"
                      ? "Jane Smith"
                      : key === "companyName"
                        ? "Your company"
                        : key === "email"
                          ? "you@company.com"
                          : "9876543210"
                  }
                  disabled={status === "loading"}
                />
              )}
              <AnimatePresence>
                {fieldErrors[key] && (
                  <motion.p
                    className="form-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {fieldErrors[key]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {submitError && (
        <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {submitError}
        </p>
      )}

      <motion.button
        type="submit"
        className="btn-primary mt-6 w-full py-3 text-sm sm:w-auto sm:px-8"
        disabled={status === "loading"}
        whileHover={status === "loading" ? {} : { scale: 1.02 }}
        whileTap={status === "loading" ? {} : { scale: 0.98 }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send className="h-4 w-4" />
          </>
        )}
      </motion.button>
    </form>
  );
}
