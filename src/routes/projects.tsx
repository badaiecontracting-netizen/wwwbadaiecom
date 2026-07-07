import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Calendar } from "lucide-react";
import civil from "@/assets/project-civil.jpg";
import industrial from "@/assets/project-industrial.jpg";
import mechanical from "@/assets/project-mechanical.jpg";
import electrical from "@/assets/project-electrical.jpg";
import infra from "@/assets/project-infrastructure.jpg";
import warehouse from "@/assets/project-warehouse.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects Portfolio | Badaie Heavy General Contracting" },
      { name: "description", content: "Selected projects delivered by Badaie across civil, industrial, mechanical, electrical and infrastructure sectors in the Kingdom of Saudi Arabia." },
      { property: "og:title", content: "Badaie Projects" },
      { property: "og:description", content: "A portfolio of heavy contracting projects delivered across KSA." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

type Cat = "All" | "Civil" | "Industrial" | "Mechanical" | "Electrical" | "Infrastructure";

const PROJECTS: { img: string; title: string; loc: string; cat: Exclude<Cat, "All">; year: number; desc: string }[] = [
  { img: civil, title: "Commercial High-Rise Tower", loc: "Al Khobar, KSA", cat: "Civil", year: 2024, desc: "22-story mixed-use tower — structural, MEP and finishing package." },
  { img: industrial, title: "Petrochemical Plant Expansion", loc: "Al Jubail, KSA", cat: "Industrial", year: 2023, desc: "Process area expansion including civil, mechanical and piping works." },
  { img: mechanical, title: "Compressor Station Installation", loc: "Ras Tanura, KSA", cat: "Mechanical", year: 2023, desc: "Installation, alignment and commissioning of heavy compressor skids." },
  { img: electrical, title: "132 kV Substation Works", loc: "Riyadh, KSA", cat: "Electrical", year: 2022, desc: "Complete civil and electrical works for utility substation." },
  { img: infra, title: "Desert Highway Interchange", loc: "Eastern Province", cat: "Infrastructure", year: 2022, desc: "Grade-separated interchange with bridges and utilities." },
  { img: warehouse, title: "Industrial Logistics Facility", loc: "Al Jubail, KSA", cat: "Civil", year: 2024, desc: "48,000 m² pre-engineered warehouse and yard works." },
  { img: industrial, title: "Refinery Turnaround Support", loc: "Yanbu, KSA", cat: "Industrial", year: 2023, desc: "Multi-discipline shutdown maintenance and mechanical works." },
  { img: mechanical, title: "Pump House Upgrade", loc: "Dammam, KSA", cat: "Mechanical", year: 2021, desc: "Mechanical and piping upgrade for large water pumping station." },
  { img: infra, title: "Utility Corridor Package", loc: "NEOM Region", cat: "Infrastructure", year: 2024, desc: "Underground utility corridor including piping and cabling." },
];

const CATS: Cat[] = ["All", "Civil", "Industrial", "Mechanical", "Electrical", "Infrastructure"];

function Projects() {
  const [cat, setCat] = useState<Cat>("All");
  const list = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Delivered with precision. Trusted by industry."
        subtitle="A selection of civil, industrial and specialized construction projects executed across the Kingdom."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="sr-only">Filter and browse projects</h2>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 justify-center">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition border ${
                  cat === c ? "bg-navy text-gold border-navy" : "bg-white text-navy border-border hover:border-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.title + p.year} className="group overflow-hidden bg-secondary hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <span className="absolute top-4 left-4 bg-gold text-navy text-[11px] uppercase tracking-widest px-3 py-1 font-semibold">{p.cat}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-navy">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-gold" />{p.loc}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-gold" />{p.year}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
