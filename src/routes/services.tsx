import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight, Building2, HardHat, Wrench, Cog, Zap, Factory, Hammer, Boxes, Truck, Users, Package, Briefcase, CircleDot } from "lucide-react";
import civil from "@/assets/service-civil.webp";
import maint from "@/assets/service-maintenance.jpg";
import mech from "@/assets/service-mechanical.jpg";
import elec from "@/assets/service-electrical.jpg";
import pipe from "@/assets/service-piping.jpg";
import steel from "@/assets/service-steel.jpg";
import rental from "@/assets/service-rental.jpg";
import manpower from "@/assets/service-manpower.jpg";
import material from "@/assets/service-material.jpg";
import support from "@/assets/service-support.jpg";
import power from "@/assets/power-rental.jpg";
import scaffold from "@/assets/eq-scaffolding.jpg";

const SITE = "https://www.badaie.com";
export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Construction & Industrial Services | Badaie KSA" },
    { name: "description", content: "Explore Badaie construction and contracting, civil and earth work, equipment rental, manpower, power rental, materials, maintenance and industrial services in Saudi Arabia." },
    { property: "og:title", content: "Badaie Construction & Industrial Services" },
    { property: "og:description", content: "Construction, equipment, manpower, power, materials and industrial support from Al Jubail, Saudi Arabia." },
    { property: "og:url", content: `${SITE}/services` }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ], links: [{ rel: "canonical", href: `${SITE}/services` }] }),
  component: Services,
});

const SERVICES = [
  { Icon: Briefcase, title: "Support", desc: "Support services for construction and industrial work scopes.", img: support },
  { Icon: Wrench, title: "Maintenance", desc: "Maintenance services for industrial requirements.", img: maint },
  { Icon: Users, title: "Manpower Supply", desc: "Engineering, supervision, operators and skilled manpower categories.", img: manpower },
  { Icon: Truck, title: "Heavy Equipment Rental", desc: "Heavy equipment and construction equipment categories.", img: rental, to: "/equipment" as const },
  { Icon: Zap, title: "Power Rental", desc: "Generators, tower lights, air compressors and hydro jetting.", img: power },
  { Icon: Package, title: "Material Supply", desc: "Material categories for civil construction and industrial requirements.", img: material },
  { Icon: Boxes, title: "Scaffolding", desc: "Scaffolding services for project work areas.", img: scaffold },
  { Icon: Hammer, title: "Welding & Fabrication", desc: "Welding and fabrication services for project requirements.", img: steel },
  { Icon: HardHat, title: "Civil Construction", desc: "Civil construction services within contracting work scopes.", img: civil },
  { Icon: Building2, title: "Earth Work", desc: "Excavation, filling, compacting and surfacing work.", img: civil },
  { Icon: Cog, title: "Mechanical & Piping", desc: "Mechanical and piping services for industrial work scopes.", img: mech },
  { Icon: Factory, title: "Electrical Works", desc: "Electrical services for construction and industrial requirements.", img: elec },
];

function Services() {
  return <>
    <PageHero eyebrow="Services" title="Construction, resources and industrial support." subtitle="Badaie provides connected service categories for construction and industrial requirements in Saudi Arabia."><div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="btn-primary">Request a Quote</Link><Link to="/equipment" className="btn-outline">Equipment Rental</Link></div></PageHero>

    <section className="section-y bg-background"><div className="container-x"><div className="grid overflow-hidden bg-navy text-white lg:grid-cols-2"><div className="p-8 md:p-12"><p className="eyebrow">Main Core Service</p><h2 className="mt-4 text-3xl md:text-5xl font-semibold">Construction & Contracting</h2><p className="mt-5 text-white/70 leading-relaxed">Civil construction, infrastructure works and earth work services are central to Badaie's contracting capability.</p><div className="mt-8 grid grid-cols-2 gap-3">{["Civil Construction","Infrastructure Works","Earth Work","Excavation","Filling","Compacting","Gravel Surfacing","Soil-Cement Surfacing"].map(item=><div key={item} className="flex gap-2 text-sm text-white/85"><CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-gold"/>{item}</div>)}</div><Link to="/contact" className="btn-primary mt-9">Discuss a Contracting Scope <ArrowRight className="h-4 w-4"/></Link></div><img src={civil} alt="Civil construction and earth work" width={1200} height={800} className="h-full min-h-80 w-full object-cover"/></div></div></section>

    <section className="section-y bg-secondary" aria-labelledby="service-categories"><div className="container-x"><div className="max-w-3xl"><p className="eyebrow">Service Categories</p><h2 id="service-categories" className="mt-4 text-3xl md:text-5xl font-semibold text-navy">Services for project requirements.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{SERVICES.map(({Icon,title,desc,img,to})=><article key={title} className="group bg-background border border-border overflow-hidden hover-lift"><img src={img} alt={title} width={1200} height={800} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"/><div className="p-6"><Icon className="h-7 w-7 text-gold"/><h3 className="mt-4 text-xl font-semibold text-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p><Link to={to ?? "/contact"} className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-navy hover:text-gold">{to ? "View equipment" : "Enquire"}<ArrowRight className="h-4 w-4"/></Link></div></article>)}</div></div></section>

    <section className="section-y bg-background"><div className="container-x grid gap-8 lg:grid-cols-2"><div className="border border-border p-7 md:p-9"><Users className="h-9 w-9 text-gold"/><h2 className="mt-5 text-3xl font-semibold text-navy">Manpower Supply</h2><p className="mt-3 text-muted-foreground">Available manpower categories are discussed according to the client requirement.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Engineering","Supervision","Office / Controllers","Riggers","Crane / Forklift Operators","Skilled Manpower","Semi-Skilled Manpower"].map(item=><div key={item} className="border-l-2 border-gold bg-secondary px-4 py-3 text-sm font-medium text-navy">{item}</div>)}</div><Link to="/contact" className="btn-ghost-navy mt-7">Request Manpower</Link></div><div className="border border-border p-7 md:p-9"><Zap className="h-9 w-9 text-gold"/><h2 className="mt-5 text-3xl font-semibold text-navy">Power Rental</h2><p className="mt-3 text-muted-foreground">Power and support equipment categories for site requirements.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Generator","Tower Light","Air Compressors","Hydro Jetting"].map(item=><div key={item} className="border-l-2 border-gold bg-secondary px-4 py-3 text-sm font-medium text-navy">{item}</div>)}</div><Link to="/contact" className="btn-ghost-navy mt-7">Request Power Equipment</Link></div></div></section>

    <section className="py-16 bg-navy text-white"><div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-3xl font-semibold">Have a project requirement?</h2><p className="mt-2 text-white/70">Contact Badaie to discuss construction, equipment, manpower, power, material or industrial service needs.</p></div><Link to="/contact" className="btn-primary">Get in Touch</Link></div></section>
  </>;
}
