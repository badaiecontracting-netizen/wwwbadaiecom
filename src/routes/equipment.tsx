import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import excavator from "@/assets/eq-excavator.jpg";
import loader from "@/assets/eq-loader.jpg";
import crane from "@/assets/eq-crane.jpg";
import forklift from "@/assets/eq-forklift.jpg";
import backhoe from "@/assets/eq-backhoe.jpg";
import boom from "@/assets/eq-boom.jpg";
import generator from "@/assets/eq-generator.jpg";
import compressor from "@/assets/eq-compressor.jpg";
import welding from "@/assets/eq-welding.jpg";
import scaffolding from "@/assets/eq-scaffolding.jpg";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Equipment Fleet | Badaie Heavy General Contracting" },
      { name: "description", content: "Explore Badaie's owned equipment fleet: excavators, cranes, loaders, forklifts, generators, compressors, welding machines, scaffolding and more." },
      { property: "og:title", content: "Badaie Equipment Fleet" },
      { property: "og:description", content: "A modern, owned fleet of construction equipment ready for deployment across KSA." },
    ],
    links: [{ rel: "canonical", href: "/equipment" }],
  }),
  component: Equipment,
});

const EQUIPMENT = [
  { img: excavator, t: "Excavators", d: "Heavy-duty tracked excavators for earthworks & foundations." },
  { img: loader, t: "Wheel Loaders", d: "Material handling and site logistics across all project sizes." },
  { img: backhoe, t: "Backhoe Loaders", d: "Versatile machines for excavation, loading and utility work." },
  { img: forklift, t: "Forklifts", d: "Diesel & LPG forklifts for warehouse and site operations." },
  { img: boom, t: "Boom Trucks", d: "Truck-mounted cranes for material lifting and placement." },
  { img: crane, t: "Mobile Cranes", d: "All-terrain mobile cranes for heavy lifting operations." },
  { img: generator, t: "Generators", d: "Silent diesel generators, from 20 kVA to 1000 kVA." },
  { img: compressor, t: "Compressors", d: "Industrial air compressors for construction & maintenance." },
  { img: welding, t: "Welding Machines", d: "SMAW, GTAW and MIG welding sets for all applications." },
  { img: scaffolding, t: "Scaffolding", d: "Cup-lock and ring-lock scaffolding, complete solutions." },
  { img: excavator, t: "Construction Tools", d: "Full range of powered and hand tools for site teams." },
  { img: loader, t: "Support Equipment", d: "Water tankers, telehandlers, boom lifts and more." },
];

function Equipment() {
  return (
    <>
      <PageHero
        eyebrow="Our Fleet"
        title="Modern, owned equipment — ready when your project is."
        subtitle="Badaie operates a diversified fleet of heavy machinery, specialized equipment and construction tools maintained to the highest reliability standards."
      />

      <section className="section-y bg-white">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {EQUIPMENT.map((e) => (
            <div key={e.t} className="group bg-secondary overflow-hidden hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-display text-navy">{e.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
