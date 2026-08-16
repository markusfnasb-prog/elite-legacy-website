"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const SLOTS = [
  {
    caption: "Starting a Family",
    ring: "sage" as const,
    photos: [
      { src: "/images/family-father-daughter.jpg", alt: "Father laughing with his young daughter" },
      { src: "/images/family-group.jpg", alt: "Multigenerational family gathered together, smiling" },
    ],
  },
  {
    caption: "Building a Life",
    ring: "forest" as const,
    photos: [
      { src: "/images/family-mother-son.jpg", alt: "Mother sharing a tender moment with her son" },
      { src: "/images/family-garden.jpg", alt: "Family walking together through a sunlit garden" },
    ],
  },
  {
    caption: "Growing Together",
    ring: "sage" as const,
    photos: [
      { src: "/images/family-autumn.jpg", alt: "Family walking together on an autumn path" },
      { src: "/images/family-group.jpg", alt: "Multigenerational family gathered together, smiling" },
    ],
  },
  {
    caption: "Passing It On",
    ring: "forest" as const,
    photos: [
      { src: "/images/family-grandfather.jpg", alt: "Grandfather holding his grandchild close" },
    ],
  },
  {
    caption: "Peace of Mind",
    ring: "sage" as const,
    photos: [
      { src: "/images/family-senior-couple.jpg", alt: "Elderly couple laughing together at home" },
      { src: "/images/family-senior-couple-2.jpg", alt: "Elderly couple sharing a quiet moment outdoors" },
    ],
  },
];

const RING_CLASSES = {
  sage: "border-sage ring-sage/25",
  forest: "border-forest ring-forest/20",
} as const;

function Locket({ slot, index }: { slot: (typeof SLOTS)[number]; index: number }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (slot.photos.length < 2) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setPhotoIndex((i) => (i + 1) % slot.photos.length);
      }, 6500);
    }, index * 900);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [slot.photos.length, index]);

  const photo = slot.photos[photoIndex];

  return (
    <li className="flex w-32 flex-col items-center sm:w-36">
      <span
        className={`relative block aspect-square w-full overflow-hidden rounded-full border-4 shadow-[var(--shadow-card)] ring-4 ring-offset-4 ring-offset-cream ${RING_CLASSES[slot.ring]}`}
      >
        <AnimatePresence mode="sync">
          <motion.span
            key={photo.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={144}
              height={144}
              className="h-full w-full object-cover"
            />
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="mt-4 text-center font-sans text-[0.8rem] font-medium text-ink/70">
        {slot.caption}
      </span>
    </li>
  );
}

export default function FamilyGallery() {
  return (
    <section className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-tight text-ink">
            Real Families, Every Stage of Life
          </h2>
          <p className="mt-3 text-[1rem] text-ink/65">
            Elite Legacy exists for the people you come home to.
          </p>
        </div>

        <ul className="mt-14 flex flex-wrap items-start justify-center gap-x-8 gap-y-10 sm:gap-x-10">
          {SLOTS.map((slot, i) => (
            <Locket key={slot.caption} slot={slot} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
