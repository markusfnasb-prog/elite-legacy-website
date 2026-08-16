"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "Do I need a medical exam?",
    a: "It depends on the carrier and policy type. Some traditional policies require a short exam; simplified-issue and final-expense policies often don't. We'll tell you upfront which of your matched options require one, before you apply.",
  },
  {
    q: "How much coverage do I need?",
    a: "It depends on your income, debts, and who's counting on you — a good starting conversation covers your mortgage or rent, any other debts, and how many years of income you'd want replaced. We'll walk through it with you rather than hand you a generic number.",
  },
  {
    q: "How is my price determined?",
    a: "Carriers price coverage using factors like your age, smoker status, health, and the coverage amount you choose. Because we work across several carriers, we compare pricing rather than quoting a single company's rate.",
  },
  {
    q: "Are you affiliated with one insurance company?",
    a: "No — Elite Legacy Insurance Group is an independent brokerage. We work with Mutual of Omaha, Royal Neighbors, TransAmerica, Corebridge Financial, Americo, and other appointed carriers, and match you to whichever fits, not whichever we're required to sell.",
  },
  {
    q: "What states do you serve?",
    a: "We're currently licensed in Georgia and Alabama.",
  },
  {
    q: "How long does it take to get covered?",
    a: "It varies by carrier and product. Some simplified-issue policies can be approved quickly; traditional underwritten policies that require an exam take longer. We'll give you a realistic timeline for your specific options once we know which ones fit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-tight text-ink">
            Common Questions
          </h2>
          <p className="mt-3 text-[1rem] text-ink/65">
            Straight answers before you ever pick up the phone.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-3">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl bg-cream-2 shadow-[var(--shadow-card)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-sans text-[0.98rem] font-bold text-ink">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sage/25 font-sans text-base font-bold text-sage-deep transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-ink/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
