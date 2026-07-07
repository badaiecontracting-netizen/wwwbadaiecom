import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Badaie Heavy General Contracting | Al Jubail, KSA" },
      { name: "description", content: "Contact Badaie Heavy General Contracting Est. — call +966 50 852 6516, email info@badaie.com, or visit our office at Ibn Al Jawzi St., Al Dana District, Al Jubail 35514." },
      { property: "og:title", content: "Contact Badaie" },
      { property: "og:description", content: "Get in touch with Badaie Heavy General Contracting in Al Jubail, Saudi Arabia." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's build your next project together."
        subtitle="Reach out for quotations, tenders, partnerships or general enquiries. Our team responds within one business day."
      />

      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-6">
            {[
              { Icon: MapPin, t: "Head Office", d: <>Ibn Al Jawzi St., Al Dana District<br />Al Jubail 35514<br />Kingdom of Saudi Arabia</> },
              { Icon: Phone, t: "Phone / WhatsApp", d: <a href="tel:+966508526516" className="hover:text-gold">+966 50 852 6516</a> },
              { Icon: Mail, t: "Email", d: <a href="mailto:info@badaie.com" className="hover:text-gold">info@badaie.com</a> },
              { Icon: Clock, t: "Working Hours", d: <>Sunday – Thursday<br />8:00 AM – 5:00 PM (AST)</> },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-5 p-6 bg-secondary border-l-4 border-gold">
                <Icon className="h-6 w-6 text-navy shrink-0 mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t}</div>
                  <div className="mt-1 text-navy font-medium leading-relaxed">{d}</div>
                </div>
              </div>
            ))}
            <a href="https://wa.me/966508526516" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-semibold uppercase text-sm tracking-widest hover:brightness-110 transition">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form
            className="p-8 md:p-10 bg-navy text-white"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <p className="eyebrow"><span className="gold-line">Send us a message</span></p>
            <h2 className="mt-4 text-2xl md:text-3xl font-display">How can we help?</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border-b border-white/25 focus:border-gold outline-none p-3 text-white resize-none transition"
              />
            </div>
            <button type="submit" className="mt-8 btn-primary">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && (
              <p className="mt-4 text-sm text-gold">Thank you — we'll be in touch shortly.</p>
            )}
          </form>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="container-x">
          <div className="overflow-hidden border border-border shadow-lg">
            <iframe
              title="Badaie Heavy General Contracting — Al Jubail"
              src="https://www.google.com/maps?q=Al+Dana+District+Al+Jubail+35514+Saudi+Arabia&output=embed"
              className="w-full h-[420px] block"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-white/60 mb-2">{label}{required && " *"}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full bg-white/5 border-b border-white/25 focus:border-gold outline-none p-3 text-white transition"
      />
    </div>
  );
}
