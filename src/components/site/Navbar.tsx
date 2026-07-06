import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/badaie-logo.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment" },
  { to: "/projects", label: "Projects" },
  { to: "/clients", label: "Clients" },
  { to: "/safety", label: "Safety" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-navy/70 to-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0 group" onClick={() => setOpen(false)}>
          <div className="grid h-12 w-12 place-items-center rounded-full bg-white/95 p-1 shadow-md ring-1 ring-gold/40 transition group-hover:ring-gold">
            <img src={logo.url} alt="Badaie" className="h-full w-full object-contain" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-white font-display text-lg font-semibold tracking-tight">Badaie</div>
            <div className="text-gold text-[10px] tracking-[0.28em] uppercase">Heavy Contracting</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-[13px] font-medium tracking-wide text-white/85 hover:text-gold transition-colors relative
                [&.active]:text-gold
                after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-gold after:origin-left after:scale-x-0 after:transition-transform
                hover:after:scale-x-100 [&.active]:after:scale-x-100"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5">
            Get Quote
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 bg-navy-deep/98 backdrop-blur-lg ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col py-4">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-white/10 text-white/85 hover:text-gold text-sm tracking-wide [&.active]:text-gold"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
