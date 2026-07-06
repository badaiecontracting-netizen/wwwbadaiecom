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
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C8A45D 1px, transparent 1px), radial-gradient(circle at 80% 60%, #C8A45D 1px, transparent 1px)",
          backgroundSize: "48px 48px, 72px 72px",
        }}
      />
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
