const SAMPLE_TESTIMONIALS = [
  {
    quote:
      "Elite Legacy found us a policy three other quotes missed entirely. It felt like working with a person, not a call center.",
    attribution: "Sample client story — Georgia",
  },
  {
    quote:
      "I was worried final-expense coverage at my age would be impossible to get. They walked me through real options in one phone call.",
    attribution: "Sample client story — Alabama",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-forest px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-center font-sans text-xs font-semibold tracking-[0.2em] text-sage-bright uppercase">
          Sample copy — replace with real client stories before launch
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {SAMPLE_TESTIMONIALS.map((t) => (
            <figure
              key={t.attribution}
              className="rounded-2xl bg-cream-2 p-7 shadow-[var(--shadow-card)]"
            >
              <blockquote className="font-accent text-[1.08rem] leading-relaxed text-ink italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-sans text-xs font-semibold tracking-[0.06em] text-sage-deep">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
