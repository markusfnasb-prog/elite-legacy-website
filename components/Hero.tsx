"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PillButton from "./PillButton";

const PHONE_DISPLAY = "(404) 884-8336";
const PHONE_TEL = "tel:+14048848336";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-forest text-cream-text">
      <Image
        src="/images/hero-family.jpg"
        alt="A father, mother, and their two children laughing together outdoors"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[0%_center]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(22,33,27,0.85) 0%, rgba(22,33,27,0.72) 40%, rgba(22,33,27,0.4) 68%, rgba(22,33,27,0.1) 90%), linear-gradient(0deg, rgba(22,33,27,0.5) 0%, rgba(22,33,27,0) 38%)",
        }}
      />

      <header className="relative z-10 flex items-center justify-end px-6 py-6 sm:px-10">
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={PHONE_TEL}
            className="hidden font-sans text-sm font-medium text-cream/90 hover:text-cream sm:block"
          >
            {PHONE_DISPLAY}
          </a>
          <PillButton href="#quote" variant="sage" className="!px-5 !py-2.5 !text-sm">
            Get a Free Quote
          </PillButton>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl font-sans text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.15] font-extrabold tracking-tight text-cream"
          style={{ textShadow: "0 2px 20px rgba(22,33,27,0.65), 0 1px 4px rgba(22,33,27,0.5)" }}
        >
          Get life insurance today, so your family is never left carrying{" "}
          <span className="font-accent font-normal italic text-sage-bright">
            the cost of goodbye
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-cream/85"
        >
          Elite Legacy Insurance Group is an independent brokerage working
          with leading carriers to match you with real coverage — for a
          child, for your working years, or for final-expense and legacy
          planning. Ages 0 to 85.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <PillButton href="#quote" variant="sage">
            Get My Free Quote
          </PillButton>
          <PillButton href={PHONE_TEL} variant="outline">
            Call {PHONE_DISPLAY}
          </PillButton>
          <PillButton href="#book" variant="outline">
            Schedule a Consultation
          </PillButton>
        </motion.div>
      </div>
    </section>
  );
}
