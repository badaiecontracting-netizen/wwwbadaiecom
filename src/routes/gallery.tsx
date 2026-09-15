import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { X } from "lucide-react";
import img1 from "@/assets/hero-construction.jpg";
import img2 from "@/assets/about-industrial.jpg";
import img3 from "@/assets/service-civil.jpg";
import img4 from "@/assets/service-maintenance.jpg";
import img5 from "@/assets/service-mechanical.jpg";
import img6 from "@/assets/service-electrical.jpg";
import img7 from "@/assets/service-piping.jpg";
import img8 from "@/assets/service-steel.jpg";
import img9 from "@/assets/project-civil.jpg";
import img10 from "@/assets/project-industrial.jpg";
import img11 from "@/assets/project-infrastructure.jpg";
import img12 from "@/assets/project-warehouse.jpg";
import img13 from "@/assets/eq-crane.jpg";
import img14 from "@/assets/eq-excavator.jpg";
import img15 from "@/assets/safety-hero.jpg";
import img16 from "@/assets/gallery-1.jpg";
import img17 from "@/assets/gallery-2.jpg";
import img18 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Service & Equipment Gallery | Badaie KSA" },
      { name: "description", content: "View representative imagery for Badaie construction, industrial service and equipment categories in Saudi Arabia." },
      { property: "og:title", content: "Badaie Service & Equipment Gallery" },
      { property: "og:description", content: "Representative construction, industrial service and equipment imagery." },
      { property: "og:url", content: "https://www.badaie.com/gallery" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://www.badaie.com/gallery" }],
  }),
  component: Gallery,
});

const IMAGES = [img16, img17, img18, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
const ALTS = ["Industrial site work", "Construction activity", "Field service activity", "Construction and equipment", "Industrial facilities", "Civil construction", "Industrial maintenance", "Mechanical services", "Electrical services", "Piping services", "Welding and fabrication", "Civil works", "Industrial services", "Infrastructure works", "Construction facility", "Mobile crane", "Excavator", "Site safety briefing"];

function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Construction, service and equipment imagery."
        subtitle="Representative visuals for the service and equipment categories presented across this website."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="sr-only">Service and equipment image collection</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(src)}
                aria-label={`Open gallery image ${i + 1} of ${IMAGES.length}`}
                className="block w-full break-inside-avoid overflow-hidden group relative"
              >
                <img src={src} alt={ALTS[i]} loading="lazy" width={1024} height={768} className="w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur flex items-center justify-center p-4 fade-up"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close image preview"
            className="absolute top-6 right-6 text-white/80 hover:text-gold"
            onClick={() => setActive(null)}
          >
            <X className="h-8 w-8" />
          </button>
           <img src={active} alt={ALTS[IMAGES.indexOf(active)] ?? "Gallery image"} className="max-h-[90vh] max-w-full object-contain" />
        </div>
      )}
    </>
  );
}
