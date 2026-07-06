import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, HardHat, Leaf, BadgeCheck, AlertTriangle, Users } from "lucide-react";
import safety from "@/assets/safety-hero.jpg";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Quality | Badaie Heavy General Contracting" },
      { name: "description", content: "Our HSE commitment: safety policy, quality policy, ISO standards and continuous training for every worker on every project." },
      { property: "og:title", content: "Safety & Quality — Badaie" },
      { property: "og:description", content: "Uncompromised commitment to HSE, quality and ISO standards." },
    ],
    links: [{ rel: "canonical", href: "/safety" }],
  }),
  component: Safety,
});

function Safety() {
  return (
    <>
      <PageHero
        eyebrow="HSE & Quality"
        title="Safety is not a policy. It's our culture."
        subtitle="Every project we deliver is governed by rigorous safety, health, environment and quality standards — because our people come first."
      />

      <section className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-2 items-center">
          <img src={safety} alt="Safety briefing" loading="lazy" width={1600} height={900} className="w-full aspect-[16/10] object-cover shadow-xl" />
          <div>
            <p className="eyebrow"><span className="gold-line">Our HSE Commitment</span></p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-navy">Zero incidents. Zero compromise.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Badaie, safety, quality and environmental responsibility are inseparable from our work. We invest in ongoing training, modern PPE, engineering controls and independent audits to protect our workforce, our clients and the communities we operate in.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            { Icon: ShieldCheck, t: "Safety Policy", d: "Every worker returns home safely. Every day. Every site." },
            { Icon: BadgeCheck, t: "Quality Policy", d: "Delivering to specification, standard and client expectation — first time, every time." },
            { Icon: Leaf, t: "Environmental Policy", d: "Minimizing impact, maximizing sustainability across every operation." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="bg-white p-8 border-t-4 border-gold">
              <Icon className="h-10 w-10 text-navy" />
              <h3 className="mt-6 text-2xl font-display text-navy">{t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Standards & Certifications</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-navy">Aligned with international best practice.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "ISO 9001", d: "Quality Management" },
              { t: "ISO 14001", d: "Environmental Management" },
              { t: "ISO 45001", d: "Occupational Health & Safety" },
              { t: "OSHA", d: "Compliant Site Practices" },
            ].map((c) => (
              <div key={c.t} className="text-center p-8 bg-secondary hover-lift">
                <div className="text-2xl font-display text-gold">{c.t}</div>
                <div className="mt-1 text-sm text-muted-foreground uppercase tracking-widest">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            { Icon: HardHat, n: "1M+", l: "Safe Man-Hours" },
            { Icon: Users, n: "100%", l: "Workforce Trained" },
            { Icon: AlertTriangle, n: "0", l: "LTIs — Recent Year" },
          ].map(({ Icon, n, l }) => (
            <div key={l} className="text-center">
              <Icon className="h-10 w-10 text-gold mx-auto" />
              <div className="mt-4 text-5xl font-display">{n}</div>
              <div className="mt-1 text-white/70 uppercase text-xs tracking-widest">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
