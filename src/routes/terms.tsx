import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Badaie Heavy General Contracting" },
      { name: "description", content: "Terms and conditions of using the Badaie Heavy General Contracting Est. website." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <p className="text-muted-foreground">By accessing this website, you agree to the following terms of use.</p>
          <h2 className="mt-8 text-2xl font-display text-navy">1. Use of Content</h2>
          <p className="mt-2 text-muted-foreground">All content is the property of Badaie Heavy General Contracting Est. and may not be reproduced without permission.</p>
          <h2 className="mt-8 text-2xl font-display text-navy">2. Accuracy</h2>
          <p className="mt-2 text-muted-foreground">We strive to keep information current but make no warranties about completeness or accuracy.</p>
          <h2 className="mt-8 text-2xl font-display text-navy">3. Liability</h2>
          <p className="mt-2 text-muted-foreground">Badaie is not liable for damages arising from use of this website.</p>
        </div>
      </section>
    </>
  ),
});
