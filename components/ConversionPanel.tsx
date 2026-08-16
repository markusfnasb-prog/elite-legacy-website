"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import PillButton from "./PillButton";

const CALENDLY_URL = "https://calendly.com/elitelegacyinsurancegroup/30min";

const PHONE_DISPLAY = "(404) 884-8336";
const PHONE_TEL = "tel:+14048848336";
const EMAIL = "elitelegacyteamllc@gmail.com";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljrwlve";

type Status = "idle" | "loading" | "success" | "error" | "unconfigured";

export default function ConversionPanel() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      return;
    }
    if (!FORMSPREE_ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-tight text-ink">
            Begin Your Coverage
          </h2>
          <p className="mt-3 text-[1rem] text-ink/65">
            Three ways to start — whichever feels most like you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl bg-white p-7 shadow-[var(--shadow-card)] sm:p-9"
          >
            <h3 className="font-sans text-base font-bold text-ink">
              Get My Free Quote
            </h3>

            {status === "success" ? (
              <p
                role="status"
                className="mt-6 rounded-xl bg-sage/15 px-5 py-6 text-sm leading-relaxed text-sage-deep"
              >
                Thank you — your request is in. We&rsquo;ll reach out within one
                business day. If it&rsquo;s urgent, call{" "}
                <a href={PHONE_TEL} className="font-semibold underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="sm:col-span-2"
                />
                <SelectField
                  label="Age Range"
                  name="ageRange"
                  required
                  options={["0–18", "18–64", "65–85"]}
                />
                <SelectField
                  label="Smoker?"
                  name="smoker"
                  required
                  options={["No", "Yes"]}
                />
                <SelectField
                  label="Desired Coverage Amount"
                  name="coverageAmount"
                  required
                  options={[
                    "Under $50,000",
                    "$50,000–$100,000",
                    "$100,000–$250,000",
                    "$250,000–$500,000",
                    "$500,000–$1,000,000",
                    "Over $1,000,000",
                    "Not sure yet",
                  ]}
                />
                <SelectField
                  label="State"
                  name="state"
                  required
                  className="sm:col-span-2"
                  options={["Georgia", "Alabama"]}
                  hint="We're currently licensed in Georgia and Alabama."
                />

                <div className="sm:col-span-2">
                  {status === "error" && (
                    <p role="alert" className="mb-4 text-sm font-medium text-red-600">
                      Please fill in every field above — or if they&rsquo;re
                      all filled in, call us directly at {PHONE_DISPLAY}.
                    </p>
                  )}
                  {status === "unconfigured" && (
                    <p role="alert" className="mb-4 text-sm font-medium text-ink/70">
                      Online quote requests aren&rsquo;t connected yet —
                      please call {PHONE_DISPLAY} or email{" "}
                      <a href={`mailto:${EMAIL}`} className="underline">
                        {EMAIL}
                      </a>{" "}
                      instead.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-full bg-sage px-8 py-3.5 font-sans text-[0.92rem] font-semibold text-forest shadow-[var(--shadow-pill)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-bright disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? "Sending…" : "Get My Free Quote"}
                  </button>
                </div>
              </div>
            )}
          </motion.form>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-sans text-base font-bold text-ink">
                Call Us
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Prefer to talk it through? We answer real questions, no script.
              </p>
              <PillButton href={PHONE_TEL} variant="cream" className="mt-5 w-full !bg-cream-2">
                {PHONE_DISPLAY}
              </PillButton>
            </motion.div>

            <motion.div
              id="book"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="scroll-mt-6 rounded-2xl bg-white p-7 shadow-[var(--shadow-card)]">
              <h3 className="font-sans text-base font-bold text-ink">
                Schedule a Consultation
              </h3>
              {CALENDLY_URL ? (
                <div className="mt-4 overflow-hidden rounded-xl">
                  <iframe
                    src={CALENDLY_URL}
                    title="Schedule a call with Elite Legacy"
                    className="h-[420px] w-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="mt-4 rounded-xl border border-dashed border-ink/20 bg-cream-2/60 px-5 py-8 text-center">
                  <p className="text-sm leading-relaxed text-ink/70">
                    Calendly booking is reserved here — add your scheduling
                    link and it goes live automatically.
                  </p>
                  <p className="mt-4 text-sm text-ink/60">
                    For now, email{" "}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-semibold underline"
                    >
                      {EMAIL}
                    </a>{" "}
                    to schedule.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink/50">
          Submitting this form is a request for a quote, not an application
          or an offer of coverage. Rates, coverage, and eligibility are
          determined by the carrier and are subject to underwriting approval
          — not all applicants will qualify for every product or price shown.
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block text-left ${className}`}>
      <span className="text-xs font-medium text-ink/70">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-ink/15 bg-cream px-3.5 py-2.5 text-[0.98rem] text-ink outline-none transition-colors focus:border-sage-deep"
        {...rest}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  hint,
  className = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  hint?: string;
  className?: string;
}) {
  return (
    <label className={`block text-left ${className}`}>
      <span className="text-xs font-medium text-ink/70">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-ink/15 bg-cream px-3.5 py-2.5 text-[0.98rem] text-ink outline-none transition-colors focus:border-sage-deep"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {hint && <span className="mt-1 block text-xs text-ink/50">{hint}</span>}
    </label>
  );
}
