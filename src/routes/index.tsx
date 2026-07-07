import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Award, ShieldCheck, HardHat, Wrench, Zap, Building2, Cog, Users, Factory, Truck, Boxes, Hammer, CheckCircle2 } from "lucide-react";
import { Counter } from "@/components/site/Counter";
import hero from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-industrial.jpg";
import serviceCivil from "@/assets/service-civil.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceMechanical from "@/assets/service-mechanical.jpg";
import servicePiping from "@/assets/service-piping.jpg";
import projectCivil from "@/assets/project-civil.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectInfra from "@/assets/project-infrastructure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Badaie Heavy General Contracting Est. | Building Excellence in KSA" },
      { name: "description", content: "Premier heavy general contractor in Al Jubail, Saudi Arabia. Civil, industrial, mechanical, electrical, piping and steel fabrication services with a proven track record of quality, safety and innovation." },
      { property: "og:title", content: "Badaie Heavy General Contracting Est. — Building Excellence in KSA" },
      { property: "og:description", content: "Premier heavy general contractor in Al Jubail, Saudi Arabia — civil, industrial, mechanical, electrical, piping and steel fabrication services." },
      { property: "og:url", content: "https://www.badaie.com/" },
    ],
    links: [{ rel: "canonical", href: "https://www.badaie.com/" }],
  }),
  component: Home,
});

const STATS = [
  { end: 20, suffix: "+", label: "Years of Experience" },
  { end: 350, suffix: "+", label: "Projects Completed" },
  { end: 1500, suffix: "+", label: "Skilled Workforce" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
];

const SERVICES = [
  { Icon: Building2, title: "Heavy General Contracting", img: serviceCivil },
  { Icon: HardHat, title: "Civil Construction", img: projectCivil },
  { Icon: Wrench, title: "Industrial Maintenance", img: serviceMaintenance },
  { Icon: Cog, title: "Mechanical Works", img: serviceMechanical },
  { Icon: Zap, title: "Electrical Works", img: projectIndustrial },
  { Icon: Factory, title: "Piping & Steel Fabrication", img: servicePiping },
];

function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Heavy construction site in Saudi Arabia"
            className="h-full w-full object-cover scale-105"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/80 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
        </div>

        <div className="container-x relative z-10 pt-28 pb-20 text-white">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow"><span className="gold-line">Est. Kingdom of Saudi Arabia</span></p>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05]">
              Building <span className="text-gold italic">Excellence</span> Through Quality, Safety & Innovation.
            </h1>
            <p className="mt-8 max-w-xl text-white/75 text-lg leading-relaxed">
              Badaie Heavy General Contracting Est. delivers world-class civil, industrial and specialized construction services across the Kingdom of Saudi Arabia.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#profile" className="btn-outline">
                <Download className="h-4 w-4" /> Company Profile
              </a>
            </div>
          </div>
        </div>

        {/* stats overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container-x">
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/15 bg-navy-deep/80 backdrop-blur-md">
              {STATS.map((s) => (
                <div key={s.label} className="p-6 md:p-8 border-r border-white/10 last:border-r-0">
                  <div className="text-4xl md:text-5xl font-display font-semibold text-gold">
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs md:text-sm text-white/70 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Industrial refinery Al Jubail"
              loading="lazy"
              width={1600}
              height={1000}
              className="rounded-sm shadow-xl w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-navy text-white p-6 md:p-8 max-w-xs shadow-xl">
              <div className="text-5xl font-display text-gold">20+</div>
              <div className="text-sm text-white/70 uppercase tracking-widest mt-1">Years Delivering<br />Heavy Contracting</div>
            </div>
          </div>
          <div>
            <p className="eyebrow"><span className="gold-line">About Badaie</span></p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-navy">
              A trusted name in Saudi Arabia's heavy contracting industry.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Based in Al Jubail — the industrial heart of the Kingdom — Badaie Heavy General Contracting Est. combines decades of on-ground experience with a modern engineering approach. From civil works to industrial maintenance, our teams deliver every project with unwavering commitment to quality, safety and time.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Certified HSE Management",
                "ISO Quality Standards",
                "In-house Equipment Fleet",
                "Skilled Multinational Workforce",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4">
              <Link to="/about" className="btn-ghost-navy">Learn More</Link>
              <Link to="/projects" className="inline-flex items-center gap-2 text-navy font-semibold text-sm uppercase tracking-widest hover:text-gold transition">
                Our Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="section-y bg-secondary">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="eyebrow"><span className="gold-line">Our Capabilities</span></p>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-navy">
                Integrated services for every phase of construction.
              </h2>
            </div>
            <Link to="/services" className="btn-ghost-navy self-start md:self-end">All Services</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ Icon, title, img }) => (
              <Link
                key={title}
                to="/services"
                className="group relative overflow-hidden bg-navy hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="mb-3 inline-grid h-11 w-11 place-items-center bg-gold/95 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{title}</h3>
                  <div className="mt-3 h-px w-10 bg-gold group-hover:w-20 transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US strip ===================== */}
      <section className="relative py-24 bg-navy-deep text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${aboutImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container-x relative grid gap-10 md:grid-cols-4">
          {[
            { Icon: Award, t: "Proven Excellence", d: "20+ years of consistent, on-time delivery across the Kingdom." },
            { Icon: ShieldCheck, t: "Safety First", d: "Zero-compromise HSE culture on every project site." },
            { Icon: Users, t: "Skilled Workforce", d: "1,500+ trained engineers, supervisors and craftsmen." },
            { Icon: Boxes, t: "Fully Equipped", d: "Owned fleet of heavy machinery and specialized tools." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="border-l border-white/15 pl-5">
              <Icon className="h-8 w-8 text-gold mb-4" />
              <h3 className="text-xl font-display">{t}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== PROJECTS PREVIEW ===================== */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="eyebrow"><span className="gold-line">Featured Projects</span></p>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-navy">
                Iconic works across Saudi Arabia.
              </h2>
            </div>
            <Link to="/projects" className="btn-ghost-navy self-start md:self-end">View All Projects</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: projectCivil, cat: "Civil", title: "High-Rise Commercial Tower", loc: "Al Khobar" },
              { img: projectIndustrial, cat: "Industrial", title: "Petrochemical Plant Expansion", loc: "Al Jubail" },
              { img: projectInfra, cat: "Infrastructure", title: "Desert Highway Interchange", loc: "Eastern Province" },
            ].map((p) => (
              <Link key={p.title} to="/projects" className="group block">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy text-[11px] uppercase tracking-widest px-3 py-1 font-semibold">{p.cat}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-display">{p.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{p.loc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy to-navy-deep text-white">
        <div className="container-x grid gap-8 md:grid-cols-[1fr_auto] items-center">
          <div>
            <p className="eyebrow"><span className="gold-line">Start Your Project</span></p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold max-w-2xl">
              Ready to build something exceptional together?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Our team is ready to discuss your next civil, industrial or mechanical project anywhere in the Kingdom.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <a href="tel:+966508526516" className="btn-outline">Call +966 50 852 6516</a>
          </div>
        </div>
      </section>
    </>
  );
}
