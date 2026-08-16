import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Elite Legacy Insurance Group | Life Insurance, Age 0–85",
  description:
    "Elite Legacy Insurance Group is an independent life insurance brokerage working across Mutual of Omaha, Royal Neighbors, TransAmerica, Corebridge Financial, Americo, and more to find you the right coverage — for a child, for your working years, or for final-expense and legacy planning. Licensed in Georgia and Alabama.",
};

const DIRECTION_CONTRACT = `
THESIS: Coverage proven through a real family's face, not an institution's seal — refuses cold trust-blue comparison chrome for warm, photo-led honesty.
OWN-WORLD: Cream ground and deep forest-black sections, sage-green as the single working accent; Manrope for sans body/UI, Source Serif 4 italic for warmth accents in headlines; actions are soft filled pills, cards are softly rounded.
STORY: Visitor sees a real family like their own, believes Elite Legacy is a warm, reachable, licensed multi-carrier broker, and requests a quote, calls, or books time.
FIRST VIEWPORT: Full-bleed real family photo, dark gradient for legibility, pill nav bar overlaid, mixed sans/italic headline and subhead bottom-left, pill CTAs, carrier strip beneath.
FORM: User-pinned redesign (two Pinterest references), replacing the prior Membership Certificate world; not a concept-seed roll.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">
        <span
          aria-hidden
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }}
        />
        {children}
      </body>
    </html>
  );
}
