import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Building2, HardHat, Wrench, Cog, Zap, Factory, Hammer, Boxes, Truck, Users, Package, Briefcase, ArrowRight,
} from "lucide-react";
import civil from "@/assets/service-civil.jpg";
import maint from "@/assets/service-maintenance.jpg";
import mech from "@/assets/service-mechanical.jpg";
import elec from "@/assets/service-electrical.jpg";
import pipe from "@/assets/service-piping.jpg";
import steel from "@/assets/service-steel.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Civil, Industrial, Mechanical & More | Badaie" },
      { name: "description", content: "Full-service heavy contracting: civil construction, industrial maintenance, mechanical, electrical, piping, steel fabrication, equipment rental, manpower and material supply." },
      { property: "og:title", content: "Badaie Services" },
      { property: "og:description", content: "Complete heavy contracting services across the Kingdom of Saudi Arabia." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const SERVICES = [
  { Icon: Building2, title: "Heavy General Contracting", desc: "Turnkey heavy contracting solutions for civil, industrial and infrastructure projects.", img: civil },
  { Icon: HardHat, title: "Civil Construction", desc: "Foundations, structures, buildings and complete civil packages.", img: civil },
  { Icon: Wrench, title: "Industrial Maintenance", desc: "Planned and shutdown maintenance for refineries, petrochemical & power plants.", img: maint },
  { Icon: Cog, title: "Mechanical Works", desc: "Installation, alignment and commissioning of mechanical equipment.", img: mech },
  { Icon: Zap, title: "Electrical Works", desc: "LV/HV electrical installation, cabling, panels and instrumentation.", img: elec },
  { Icon: Factory, title: "Piping", desc: "Prefabrication and site installation of process, utility and structural piping.", img: pipe },
  { Icon: Hammer, title: "Steel Fabrication", desc: "In-house steel fabrication for structures, platforms and pressure parts.", img: steel },
  { Icon: Boxes, title: "Duct Fabrication & Installation", desc: "HVAC and industrial duct systems fabricated and installed on site.", img: mech },
  { Icon: Truck, title: "Equipment Rental", desc: "Cranes, excavators, loaders, generators and specialty equipment.", img: maint },
  { Icon: Users, title: "Manpower Supply", desc: "Trained, certified and experienced manpower for short and long-term deployment.", img: civil },
  { Icon: Package, title: "Material Supply", desc: "Sourcing and supply of construction and industrial materials.", img: steel },
  { Icon: Briefcase, title: "Industrial Support Services", desc: "Site support, logistics, scaffolding and specialized trades.", img: pipe },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Full-spectrum heavy contracting under one trusted name."
        subtitle="Twelve integrated service disciplines — engineered, staffed and equipped in-house for uncompromised execution."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="sr-only">Service disciplines</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ Icon, title, desc, img }) => (
            <article key={title} className="group relative bg-white border border-border overflow-hidden hover-lift">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="grid h-11 w-11 place-items-center bg-navy text-gold -mt-12 relative shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-display text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-navy hover:text-gold transition">
                  Enquire <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-display">Have a specialized requirement?</h2>
            <p className="mt-2 text-white/70">Our team will structure a scope tailored to your project.</p>
          </div>
          <Link to="/contact" className="btn-primary">Request a Proposal</Link>
        </div>
      </section>
    </>
  );
}
