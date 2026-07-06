import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients | Badaie Heavy General Contracting" },
      { name: "description", content: "Trusted by leading Saudi Arabian industrial and infrastructure clients including Al Amara International, Arabian Qudra, Plant-Tech Arabia, CRCC, Esnad International and Kamco." },
      { property: "og:title", content: "Badaie Clients" },
      { property: "og:description", content: "Serving the Kingdom's leading industrial and infrastructure clients." },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: Clients,
});

const CLIENTS = [
  { name: "Al Amara International", short: "AL AMARA" },
  { name: "Arabian Qudra", short: "ARABIAN QUDRA" },
  { name: "Plant-Tech Arabia", short: "PLANT-TECH" },
  { name: "CRCC 中国铁建", short: "CRCC" },
  { name: "Esnad International", short: "ESNAD" },
  { name: "Kamco", short: "KAMCO" },
];

function LogoCard({ name, short }: { name: string; short: string }) {
  return (
    <div className="group aspect-[3/2] grid place-items-center bg-white border border-border p-8 transition-all hover:border-gold hover:shadow-lg">
      <div className="text-center">
        <div className="font-display text-2xl md:text-3xl text-navy tracking-wide group-hover:text-gold transition-colors">
          {short}
        </div>
        <div className="mt-2 h-px w-10 bg-gold mx-auto opacity-70" />
        <div className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">{name}</div>
      </div>
    </div>
  );
}

function Clients() {
  const marquee = [...CLIENTS, ...CLIENTS];
  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by the Kingdom's most demanding operators."
        subtitle="We are proud to partner with leading industrial, infrastructure and engineering companies across Saudi Arabia."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {CLIENTS.map((c) => (
              <LogoCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* marquee */}
      <section className="py-14 bg-navy text-white overflow-hidden">
        <div className="container-x mb-8">
          <p className="eyebrow"><span className="gold-line">Long-term Partnerships</span></p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex marquee gap-16 pr-16">
            {marquee.map((c, i) => (
              <div key={i} className="shrink-0 text-3xl md:text-4xl font-display text-white/70 hover:text-gold transition">
                {c.short}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
