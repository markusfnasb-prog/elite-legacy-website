import type { ReactNode } from "react";

type Variant = "sage" | "outline" | "cream";

const variantClasses: Record<Variant, string> = {
  sage: "bg-sage text-forest hover:bg-sage-bright shadow-[var(--shadow-pill)]",
  outline:
    "bg-transparent text-cream border-2 border-cream/70 hover:bg-cream/10",
  cream:
    "bg-cream text-forest hover:bg-cream-2 shadow-[var(--shadow-pill)]",
};

export default function PillButton({
  href,
  children,
  variant = "sage",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-[0.92rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
