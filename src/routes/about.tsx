import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Target, Eye, Gem, Award, ShieldCheck, Users, Building2, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-industrial.jpg";
import mdImg from "@/assets/md-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Badaie Heavy General Contracting | Al Jubail, KSA" },
      { name: "description", content: "Learn about Badaie Heavy General Contracting Est. — our mission, vision, values, history and leadership serving the Kingdom of Saudi Arabia's construction industry." },
      { property: "og:title", content: "About Badaie Heavy General Contracting" },
      { property: "og:description", content: "Our story, vision and commitment to excellence in KSA heavy contracting." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { Icon: ShieldCheck, t: "Integrity", d: "Every commitment we make is a promise we keep." },
  { Icon: Award, t: "Excellence", d: "We hold ourselves to the highest standards of workmanship." },
  { Icon: Users, t: "People", d: "Our people are our greatest asset and safety our priority." },
  { Icon: Gem, t: "Innovation", d: "We continuously modernize methods, tools and techniques." },
];

const TIMELINE = [
  { year: "2005", t: "Company Founded", d: "Badaie Est. begins operations in Al Jubail Industrial City." },
  { year: "2010", t: "Industrial Expansion", d: "Entered petrochemical maintenance and mechanical works." },
  { year: "2015", t: "ISO Certification", d: "Achieved ISO 9001 and OHSAS 18001 certifications." },
  { year: "2019", t: "Fleet Modernization", d: "Doubled our owned equipment fleet across the Kingdom." },
  { year: "2023", t: "1,500+ Workforce", d: "Reached a milestone of over 1,500 skilled professionals." },
  { year: "Today", t: "Vision 2030 Partner", d: "Contributing to KSA's mega projects and industrial growth." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Two decades of building the Kingdom, one project at a time."
        subtitle="From civil works to complex industrial installations, Badaie has grown into a trusted name in Saudi Arabia's heavy contracting industry."
      />

      {/* Overview */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-2 items-center">
          <img src={aboutImg} alt="Industrial site" loading="lazy" width={1600} height={1000} className="w-full aspect-[4/3] object-cover shadow-xl" />
          <div>
            <p className="eyebrow"><span className="gold-line">Company Overview</span></p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-navy">Engineering trust into every project.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Badaie Heavy General Contracting Est. is a Saudi-based construction and industrial services company headquartered in Al Jubail. We provide a comprehensive portfolio of contracting solutions — from civil and structural works to mechanical, electrical, piping, steel fabrication, and long-term industrial maintenance.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our clients include leading operators in petrochemicals, energy, infrastructure and general industry across the Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-y bg-secondary">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            { Icon: Target, t: "Our Mission", d: "To deliver heavy contracting and industrial services of uncompromising quality, safety and reliability — creating lasting value for every stakeholder we serve." },
            { Icon: Eye, t: "Our Vision", d: "To be the most trusted heavy contracting partner in the Kingdom of Saudi Arabia, recognized for engineering excellence and world-class execution." },
            { Icon: Gem, t: "Our Promise", d: "On time. On budget. On safety. On quality. Every project, every day." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="bg-white p-8 hover-lift border-t-4 border-gold">
              <Icon className="h-10 w-10 text-navy" />
              <h3 className="mt-6 text-2xl font-display text-navy">{t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow">Core Values</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-navy">Principles that guide us.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, t, d }) => (
              <div key={t} className="p-8 bg-secondary hover-lift">
                <Icon className="h-9 w-9 text-gold" />
                <h3 className="mt-5 text-xl font-display text-navy">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MD Message */}
      <section className="section-y bg-navy-deep text-white">
        <div className="container-x grid gap-12 lg:grid-cols-[420px_1fr] items-center">
          <div className="relative">
            <img src={mdImg} alt="Managing Director" loading="lazy" width={900} height={1100} className="w-full object-cover" />
            <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-6 py-4">
              <div className="font-display text-lg">Eng. Badaie</div>
              <div className="text-xs uppercase tracking-widest">Managing Director</div>
            </div>
          </div>
          <div>
            <p className="eyebrow"><span className="gold-line">Managing Director's Message</span></p>
            <h2 className="mt-4 text-3xl md:text-4xl font-display">"We don't just build structures — we build trust."</h2>
            <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
              <p>Two decades ago, we began with a simple belief: that the Kingdom's growth demands contractors who honor their word, protect their people, and deliver excellence in every discipline.</p>
              <p>Today, that belief still drives every project we undertake — from the smallest maintenance shutdown to the largest civil and industrial installation. Our people, our systems and our equipment are all built for one purpose: to serve our clients with distinction.</p>
              <p>Thank you for your continued trust in Badaie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Our Journey</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-navy">Milestones along the way.</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gold/40 -translate-x-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((it, i) => (
                <div key={it.year} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className={`${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="text-5xl font-display text-gold">{it.year}</div>
                    <h3 className="mt-2 text-xl font-display text-navy">{it.t}</h3>
                    <p className="mt-2 text-muted-foreground">{it.d}</p>
                  </div>
                  <div className="hidden md:block relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gold ring-4 ring-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-y bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Why Choose Badaie</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-navy">The Badaie advantage.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Over 20 years of proven experience in KSA",
              "Fully owned modern equipment fleet",
              "ISO-certified quality management",
              "Robust HSE and safety training culture",
              "Skilled multinational workforce of 1,500+",
              "Trusted by leading oil, gas & industrial clients",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white p-5">
                <CheckCircle2 className="h-6 w-6 text-gold shrink-0" />
                <p className="text-navy font-medium">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
