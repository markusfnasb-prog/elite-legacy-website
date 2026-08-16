import Image from "next/image";

const PORTRAITS = [
  { src: "/images/family-father-daughter.jpg", alt: "Father laughing with his young daughter", caption: "Starting a Family", ring: "sage" },
  { src: "/images/family-mother-son.jpg", alt: "Mother sharing a tender moment with her son", caption: "Building a Life", ring: "forest" },
  { src: "/images/family-group.jpg", alt: "Multigenerational family gathered together, smiling", caption: "Growing Together", ring: "sage" },
  { src: "/images/family-grandfather.jpg", alt: "Grandfather holding his grandchild close", caption: "Passing It On", ring: "forest" },
  { src: "/images/family-senior-couple.jpg", alt: "Elderly couple laughing together at home", caption: "Peace of Mind", ring: "sage" },
] as const;

const RING_CLASSES = {
  sage: "border-sage ring-sage/25",
  forest: "border-forest ring-forest/20",
} as const;

export default function FamilyGallery() {
  return (
    <section className="bg-cream px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-tight text-ink">
            Real Families, Every Stage of Life
          </h2>
          <p className="mt-3 text-[1rem] text-ink/65">
            Elite Legacy exists for the people you come home to.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-10 sm:gap-x-10">
          {PORTRAITS.map((p) => (
            <li key={p.src} className="flex w-32 flex-col items-center sm:w-36">
              <span
                className={`block overflow-hidden rounded-full border-4 shadow-[var(--shadow-card)] ring-4 ring-offset-4 ring-offset-cream ${RING_CLASSES[p.ring]}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={144}
                  height={144}
                  className="aspect-square h-full w-full object-cover"
                />
              </span>
              <span className="mt-4 text-center font-sans text-[0.8rem] font-medium text-ink/70">
                {p.caption}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
