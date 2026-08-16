import Link from "next/link";

const PHONE_DISPLAY = "(404) 884-8336";
const PHONE_TEL = "tel:+14048848336";
const EMAIL = "elitelegacyteamllc@gmail.com";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest px-6 py-14 text-cream-text sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-sans text-base font-extrabold tracking-tight text-cream">
            Elite Legacy Insurance Group
          </span>
          <p className="text-sm text-cream/60">
            Independent, multi-carrier life insurance brokerage.
          </p>
        </div>

        <div className="mx-auto mt-8 mb-8 h-px w-full max-w-xs bg-cream/15" />

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <a href={PHONE_TEL} className="font-medium text-cream/80 hover:text-sage-bright">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="font-medium text-cream/80 hover:text-sage-bright">
            {EMAIL}
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-cream/45">
          Licensed in Georgia (License #3719981) and Alabama (License
          #30003543214). Products, carriers, and availability vary by state.
          Elite Legacy Insurance Group is an independent brokerage and is
          not affiliated with, nor guarantees products of, any single carrier.
        </p>

        <p className="mt-6 text-center text-xs text-cream/30">
          © {year} Elite Legacy Insurance Group. All rights reserved. ·{" "}
          <Link href="/privacy" className="underline hover:text-cream/60">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
