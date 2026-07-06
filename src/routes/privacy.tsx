import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Badaie Heavy General Contracting" },
      { name: "description", content: "Privacy policy for the Badaie Heavy General Contracting Est. website." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl prose prose-slate">
          <p className="text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
          <h2 className="mt-8 text-2xl font-display text-navy">1. Information We Collect</h2>
          <p className="mt-2 text-muted-foreground">We may collect basic contact information you voluntarily provide through our contact form (name, email, phone, message).</p>
          <h2 className="mt-8 text-2xl font-display text-navy">2. How We Use It</h2>
          <p className="mt-2 text-muted-foreground">Solely to respond to your enquiries and provide the services you request. We do not sell or share your data with third parties.</p>
          <h2 className="mt-8 text-2xl font-display text-navy">3. Cookies</h2>
          <p className="mt-2 text-muted-foreground">This website uses only functional cookies necessary for its operation.</p>
          <h2 className="mt-8 text-2xl font-display text-navy">4. Contact</h2>
          <p className="mt-2 text-muted-foreground">For any privacy questions, email <a href="mailto:info@badaie.com" className="text-gold">info@badaie.com</a>.</p>
        </div>
      </section>
    </>
  ),
});
