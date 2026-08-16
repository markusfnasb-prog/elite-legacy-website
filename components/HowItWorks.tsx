const STEPS = [
  {
    number: "1",
    title: "Tell Us About Your Family",
    body: "A short conversation about who you're protecting, your age, and your situation — just a conversation, no exam or paperwork required to start it.",
  },
  {
    number: "2",
    title: "We Shop Your Options",
    body: "We check your details against our full carrier roster — Mutual of Omaha, Royal Neighbors, TransAmerica, Corebridge Financial, Americo, and more — for the best combination of coverage and price.",
  },
  {
    number: "3",
    title: "You Choose & Get Covered",
    body: "We walk you through the matched options in plain language, you choose, and we handle the paperwork directly with the carrier.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-forest px-6 py-20 text-cream-text sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-sans text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-tight text-cream">
          How It Works
        </h2>

        <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((step) => (
            <li key={step.number}>
              <div className="flex justify-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage font-sans text-base font-bold text-forest">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 text-center font-sans text-lg font-bold text-cream sm:text-left">
                {step.title}
              </h3>
              <p className="mt-2 text-center text-[0.98rem] leading-relaxed text-cream/70 sm:text-left">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
