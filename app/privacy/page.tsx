import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Elite Legacy Insurance Group",
};

const EMAIL = "elitelegacyteamllc@gmail.com";
const PHONE_DISPLAY = "(404) 884-8336";

export default function PrivacyPolicy() {
  return (
    <main className="bg-cream px-6 py-16 text-ink sm:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="font-sans text-sm font-semibold text-sage-deep underline"
        >
          ← Back to Elite Legacy Insurance Group
        </Link>

        <h1 className="mt-6 font-sans text-3xl font-extrabold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-8 space-y-8 text-[0.98rem] leading-relaxed text-ink/85">
          <p>
            Elite Legacy Insurance Group (&ldquo;Elite Legacy,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us&rdquo;) is an independent life
            insurance brokerage licensed in Georgia and Alabama. This policy
            explains what information we collect through this website, how
            we use it, and who we share it with.
          </p>

          <section>
            <h2 className="font-sans text-lg font-bold text-ink">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you submit our quote request form, we collect: your name,
              phone number, email address, age range, smoker status, desired
              coverage amount, and state of residence. If you book a call
              through our scheduling tool, that tool collects your name,
              email, and the time you selected. We do not collect payment
              information, Social Security numbers, or medical records
              through this website.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-bold text-ink">
              How We Use It
            </h2>
            <p className="mt-2">
              We use this information to contact you about the life
              insurance coverage you requested, to match you with an
              appropriate carrier from our roster, and to prepare a quote.
              Age range and smoker status are standard rating factors life
              insurance carriers use to price coverage — we ask for them
              up front so your quote is meaningful, not to make any
              determination ourselves. We do not use your information for
              unrelated marketing without your consent, and we do not sell
              your information to data brokers or unrelated third parties.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-bold text-ink">
              Who We Share It With
            </h2>
            <p className="mt-2">
              Your quote request is processed through Formspree, a
              third-party form-delivery service, which sends it to us by
              email. Scheduling a call is handled through Calendly, a
              third-party scheduling service. Both providers process your
              information under their own privacy policies and may use
              cookies to operate their embedded tools on this page. If you
              proceed with a quote, we share the information necessary to
              underwrite your policy with the specific carrier you choose
              (for example, Mutual of Omaha, Royal Neighbors, TransAmerica,
              Corebridge Financial, or Americo) — never with carriers you
              haven&rsquo;t chosen to work with.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-bold text-ink">
              Your Choices
            </h2>
            <p className="mt-2">
              You can ask us to delete the information you&rsquo;ve
              submitted, correct it, or stop contacting you at any time by
              emailing{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold underline">
                {EMAIL}
              </a>{" "}
              or calling{" "}
              <a href="tel:+14048848336" className="font-semibold underline">
                {PHONE_DISPLAY}
              </a>
              . We&rsquo;ll honor that request except where we&rsquo;re
              required to retain records under state insurance regulations.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-bold text-ink">
              Security
            </h2>
            <p className="mt-2">
              We take reasonable steps to protect the information you share
              with us, but no method of transmission over the internet is
              completely secure, and we can&rsquo;t guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-bold text-ink">
              Contact
            </h2>
            <p className="mt-2">
              Questions about this policy or your information can be sent to{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold underline">
                {EMAIL}
              </a>{" "}
              or {PHONE_DISPLAY}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
