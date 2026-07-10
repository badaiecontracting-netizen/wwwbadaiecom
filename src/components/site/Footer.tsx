import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/badaie-logo.asset.json";

const SOCIALS = [
  { href: "https://www.linkedin.com/company/badaie-heavy-gen-cont-est/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.facebook.com/share/1YBqEP3SAQ/", label: "Facebook", Icon: Facebook },
  { href: "https://youtube.com/@bhc_sa", label: "YouTube", Icon: Youtube },
  { href: "https://www.tiktok.com/@bhc.sa", label: "TikTok", Icon: TikTokIcon },
  { href: "https://x.com/BH_Contracting", label: "X", Icon: XIcon },
  { href: "https://whatsapp.com/channel/0029Vaz5dXx5PO0srOGcXK2M", label: "WhatsApp Channel", Icon: WhatsIcon },
];

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.6 6.3a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2.2-4.1h-3.4v14.8a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.4a6.3 6.3 0 1 0 5.4 6.2V9.1a9 9 0 0 0 5.6 1.9V7.6a5.5 5.5 0 0 1-0-1.3z"/>
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L22.75 22H16l-5.36-6.98L4.7 22H1.44l8-9.15L1 2h6.9l4.83 6.4L18.244 2Zm-1.14 18h1.85L7.02 4H5.05l12.055 16Z"/>
    </svg>
  );
}
function WhatsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 3.5A11 11 0 0 0 3.4 17L2 22l5.2-1.4a11 11 0 0 0 16.3-9.7 10.9 10.9 0 0 0-3-7.4Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3 .8.8-3-.2-.3a9.1 9.1 0 1 1 7.3 4Zm5-6.8c-.3-.2-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1s-.8.9-1 1.1c-.2.2-.3.2-.6.1a7.5 7.5 0 0 1-3.7-3.2c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .2.2 2 3 4.7 4.2 1.6.7 2.2.7 3 .6.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-white p-1">
              <img src={logo.url} alt="Badaie" className="h-full w-full object-cover rounded-full" />
            </div>
            <div>
              <div className="font-display text-lg text-white">Badaie</div>
              <div className="text-gold text-[10px] tracking-[0.28em] uppercase">HEAVY GEN.CONT.EST</div>
            </div>
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Badaie Heavy General Contracting Est. — Delivering excellence in civil, industrial, mechanical and electrical construction across the Kingdom of Saudi Arabia.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-gold hover:text-gold transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["/about", "About Us"],
              ["/projects", "Our Projects"],
              ["/equipment", "Equipment"],
              ["/clients", "Clients"],
              ["/safety", "Safety & Quality"],
              ["/gallery", "Gallery"],
            ].map(([to, l]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Civil Construction",
              "Industrial Maintenance",
              "Mechanical Works",
              "Electrical & Piping",
              "Steel Fabrication",
              "Manpower Supply",
              "Equipment Rental",
            ].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-gold transition">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>Ibn Al Jawzi St., Al Dana District,<br />Al Jubail 35514, KSA</span>
            </li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <a href="tel:+966508526516" className="hover:text-gold">+966 50 852 6516</a>
            </li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <a href="mailto:info@badaie.com" className="hover:text-gold">info@badaie.com</a>
            </li>
          </ul>
          <div className="mt-6 overflow-hidden rounded border border-white/10">
            <iframe
              title="Badaie location"
              src="https://www.google.com/maps?q=Al+Jubail+35514+Saudi+Arabia&output=embed"
              className="w-full h-32"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Badaie Heavy General Contracting Est. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
