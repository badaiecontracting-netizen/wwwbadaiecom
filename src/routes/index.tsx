import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, HardHat, Users, Truck, Zap, Package, Wrench, Cog, Factory, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-industrial.jpg";
import civilImg from "@/assets/service-civil.jpg";
import equipmentImg from "@/assets/service-rental.jpg";
import manpowerImg from "@/assets/service-manpower.jpg";
import powerImg from "@/assets/power-rental.jpg";
import materialImg from "@/assets/service-material.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";

const SITE = "https://www.badaie.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construction, Equipment & Manpower | Badaie KSA" },
      { name: "description", content: "Badaie provides construction and contracting, heavy equipment rental, manpower supply, power rental, material supply and industrial services from Al Jubail, Saudi Arabia." },
      { property: "og:title", content: "Badaie | Heavy Equipment, Manpower & Industrial Services" },
      { property: "og:description", content: "Construction and contracting, equipment, manpower, power, materials and industrial support in Saudi Arabia." },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
  }),
  component: Home,
});

const CORE = [
  { Icon: Building2, title: "Construction & Contracting", text: "Civil construction, infrastructure works and earth work services.", to: "/services" as const },
  { Icon: Truck, title: "Heavy Equipment Rental", text: "Equipment categories for construction and industrial requirements.", to: "/equipment" as const },
  { Icon: Users, title: "Manpower Supply", text: "Engineering, supervision, operators and skilled manpower categories.", to: "/services" as const },
  { Icon: Zap, title: "Power Rental", text: "Generators, tower lights, air compressors and hydro jetting.", to: "/services" as const },
  { Icon: Package, title: "Material Supply", text: "Construction and industrial material supply categories.", to: "/services" as const },
  { Icon: Wrench, title: "Industrial Services", text: "Support, maintenance, mechanical, electrical and fabrication services.", to: "/services" as const },
];

const SERVICE_FEATURES = [
  { img: equipmentImg, title: "Equipment Rental", text: "Explore the equipment categories presented by Badaie.", to: "/equipment" as const },
  { img: manpowerImg, title: "Manpower Supply", text: "Engineering, supervision, operators and skilled manpower.", to: "/services" as const },
  { img: powerImg, title: "Power Rental", text: "Generators, tower lights, air compressors and hydro jetting.", to: "/services" as const },
  { img: materialImg, title: "Material Supply", text: "Materials for civil construction and industrial requirements.", to: "/services" as const },
];

function Home() {
  return (
    <>
      <section className="relative min-h-[min(860px,100svh)] flex items-center overflow-hidden bg-navy-deep text-white">
        <img src={hero} alt="Construction and heavy equipment operations in Saudi Arabia" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy/45" />
        <div className="container-x relative z-10 py-32 md:py-40">
          <div className="max-w-4xl fade-up">
            <p className="eyebrow"><span className="gold-line">Al Jubail · Saudi Arabia</span></p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.08]">Heavy Equipment, Manpower & Industrial Services</h1>
            <p className="mt-7 max-w-2xl text-base md:text-xl text-white/80 leading-relaxed">Badaie Heavy Gen. Cont. Est. provides Construction & Contracting, equipment rental, manpower supply, power rental, material supply and industrial services in the Kingdom of Saudi Arabia.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
              <Link to="/contact" className="inline-flex min-h-12 items-center px-4 text-sm font-semibold uppercase text-white hover:text-gold">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="core-services">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">Core Capabilities</p>
            <h2 id="core-services" className="mt-4 text-3xl md:text-5xl font-semibold text-navy">One point of contact for essential project services.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">Find the service category that fits your requirement, then contact Badaie to discuss the scope.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {CORE.map(({ Icon, title, text, to }) => (
              <Link key={title} to={to} className="group bg-background p-7 md:p-8 hover:bg-secondary transition-colors">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 text-xl font-display font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-navy group-hover:text-gold">Explore <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy text-white" aria-labelledby="construction-heading">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow"><span className="gold-line">Main Core Service</span></p>
            <h2 id="construction-heading" className="mt-4 text-3xl md:text-5xl font-semibold">Construction & Contracting</h2>
            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">Badaie provides civil construction, infrastructure works and earth work services for project requirements in Saudi Arabia.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {["Excavation", "Filling", "Compacting", "Gravel Surfacing", "Soil-Cement Surfacing", "Civil Construction", "Infrastructure Works", "Earth Work"].map((item) => <div key={item} className="border-l-2 border-gold pl-3 text-white/85">{item}</div>)}
            </div>
            <Link to="/services" className="btn-primary mt-9">View Contracting Services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <img src={civilImg} alt="Civil construction and earth work operations" width={1200} height={800} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="section-y bg-secondary" aria-labelledby="project-resources">
        <div className="container-x">
          <p className="eyebrow">Project Resources</p>
          <h2 id="project-resources" className="mt-4 max-w-3xl text-3xl md:text-5xl font-semibold text-navy">Equipment, people, power and materials.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICE_FEATURES.map((item) => <Link key={item.title} to={item.to} className="group bg-background border border-border overflow-hidden hover-lift"><img src={item.img} alt={item.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="p-6"><h3 className="text-xl font-semibold text-navy">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.text}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-navy">View details <ArrowRight className="h-4 w-4" /></span></div></Link>)}
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="industrial-heading">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <img src={maintenanceImg} alt="Industrial maintenance and support work" width={1200} height={800} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div><p className="eyebrow">Industrial Services</p><h2 id="industrial-heading" className="mt-4 text-3xl md:text-5xl font-semibold text-navy">Support for industrial requirements.</h2><p className="mt-6 text-muted-foreground leading-relaxed">Badaie presents support, maintenance, mechanical, electrical, piping, scaffolding, welding and fabrication services for industrial work scopes.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{[{Icon:Cog,t:"Mechanical & Piping"},{Icon:Zap,t:"Electrical Works"},{Icon:Factory,t:"Welding & Fabrication"},{Icon:HardHat,t:"Maintenance & Support"}].map(({Icon,t})=><div key={t} className="flex items-center gap-3 border border-border p-4"><Icon className="h-5 w-5 text-gold"/><span className="font-semibold text-navy">{t}</span></div>)}</div><Link to="/services" className="btn-ghost-navy mt-8">All Services</Link></div>
        </div>
      </section>

      <section className="section-y bg-secondary" aria-labelledby="about-heading"><div className="container-x grid items-center gap-12 lg:grid-cols-2"><div><p className="eyebrow">About Badaie</p><h2 id="about-heading" className="mt-4 text-3xl md:text-5xl font-semibold text-navy">Industrial and contracting support from Al Jubail.</h2><p className="mt-6 text-muted-foreground leading-relaxed">Badaie Heavy Gen. Cont. Est. is based in Al Jubail, Kingdom of Saudi Arabia. The company presents construction, equipment, manpower, power, material and industrial service categories for client requirements.</p><div className="mt-7 space-y-3">{["Professionalism", "Technical Knowledge", "Engineering Capability", "Quality-Focused Service"].map((item)=><div key={item} className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-gold"/><span className="font-medium text-navy">{item}</span></div>)}</div><Link to="/about" className="btn-ghost-navy mt-8">About the Company</Link></div><img src={aboutImg} alt="Industrial facilities in Al Jubail" width={1600} height={1000} loading="lazy" className="aspect-[4/3] w-full object-cover"/></div></section>

      <section className="py-16 md:py-20 bg-navy-deep text-white"><div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow">Discuss Your Requirement</p><h2 className="mt-3 max-w-2xl text-3xl md:text-4xl font-semibold">Contact Badaie for your next project requirement.</h2></div><div className="flex flex-wrap gap-3"><Link to="/contact" className="btn-primary">Request a Quote</Link><a href="https://wa.me/966508526516" target="_blank" rel="noreferrer noopener" className="btn-outline">WhatsApp</a></div></div></section>
    </>
  );
}
