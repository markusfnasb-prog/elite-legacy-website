const STAGES = [
  {
    range: "Ages 0–17",
    title: "Children's Coverage",
    body: "Starter protection and locked-in insurability for the people you're just getting to know.",
  },
  {
    range: "Ages 18–64",
    title: "Working Years",
    body: "Income protection and family coverage while you're building the life it's meant to protect.",
  },
  {
    range: "Ages 65–85",
    title: "Legacy & Final Expense",
    body: "Coverage that eases the burden on the people left holding the arrangements.",
  },
];

export default function CoverageCompartments() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-tight text-ink">
            Who Can Be Covered, By Life Stage
          </h2>
          <p className="mt-3 text-[1rem] text-ink/65">
            Life insurance isn&rsquo;t just for one moment in life — from newborns to grandparents, there&rsquo;s a fit for everyone in your family, age 0 to 85.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STAGES.map((stage) => (
            <div
              key={stage.title}
              className="rounded-2xl bg-cream-2 p-7 shadow-[var(--shadow-card)]"
            >
              <span className="tabular inline-block rounded-full bg-sage/20 px-3 py-1 font-sans text-xs font-bold text-sage-deep">
                {stage.range}
              </span>
              <h3 className="mt-4 font-sans text-lg font-bold text-ink">
                {stage.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
