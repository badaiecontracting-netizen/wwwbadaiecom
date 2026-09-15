import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Badaie Heavy General Contracting" },
      { name: "description", content: "Privacy policy for the Badaie Heavy General Contracting Est. website." },
      { property: "og:title", content: "Privacy Policy | Badaie" },
      { property: "og:description", content: "Privacy information for the Badaie website." },
      { property: "og:url", content: "https://www.badaie.com/privacy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://www.badaie.com/privacy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl prose prose-slate">
          <p className="text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
          <h2 className="mt-8 text-2xl font-display text-navy">1. Information We Collect</h2>
          <p className="mt-2 text-muted-foreground">The enquiry form is completed in your browser and does not submit information automatically. Information is received when you choose to contact Badaie by phone, email or WhatsApp.</p>
          <h2 className="mt-8 text-2xl font-display text-navy">2. How We Use It</h2>
          <p className="mt-2 text-muted-foreground">Contact details you send directly may be used to respond to your enquiry and discuss the service you request.</p>
          <h2 className="mt-8 text-2xl font-display text-navy">3. Cookies</h2>
          <p className="mt-2 text-muted-foreground">Third-party content, such as the embedded map, may apply its own privacy and cookie practices.</p>
          <h2 className="mt-8 text-2xl font-display text-navy">4. Contact</h2>
          <p className="mt-2 text-muted-foreground">For any privacy questions, email <a href="mailto:info@badaie.com" className="text-gold">info@badaie.com</a>.</p>
        </div>
      </section>
    </>
  ),
});
