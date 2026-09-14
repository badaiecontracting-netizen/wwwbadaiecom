import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container-x relative">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-white/70 text-lg leading-relaxed">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
