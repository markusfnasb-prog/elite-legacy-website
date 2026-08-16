const CARRIERS = [
  "Mutual of Omaha",
  "Royal Neighbors of America",
  "TransAmerica",
  "Corebridge Financial",
  "Americo",
  "and other appointed carriers",
];

export default function CarrierStrip({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-cream/80" : "text-ink/70";
  const label = tone === "dark" ? "text-cream/50" : "text-ink/45";

  return (
    <div className="py-10 sm:py-12">
      <p className={`mb-3 text-center font-sans text-[0.7rem] font-semibold tracking-[0.2em] uppercase ${label}`}>
        We Work With
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4">
        {CARRIERS.map((name) => (
          <li
            key={name}
            className={`font-sans text-[0.82rem] font-medium ${text}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
