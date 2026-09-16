import { Facebook, Linkedin, MessageCircle, Music2, Youtube } from "lucide-react";
import { OFFICIAL_SOCIALS } from "@/lib/socials";

const ICONS = {
  youtube: Youtube,
  linkedin: Linkedin,
  facebook: Facebook,
  tiktok: Music2,
  whatsapp: MessageCircle,
} as const;

type SocialLinksProps = {
  showLabels?: boolean;
  className?: string;
};

export function SocialLinks({ showLabels = false, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} aria-label="Official social media">
      {OFFICIAL_SOCIALS.map(({ href, label, icon }) => {
        const Icon = icon === "x" ? null : ICONS[icon];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={label}
            title={label}
            className={showLabels ? "inline-flex min-h-11 items-center gap-2 border border-border bg-background px-4 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold" : "grid h-10 w-10 place-items-center rounded-full border border-current/20 transition-colors hover:border-gold hover:text-gold"}
          >
            {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : <span aria-hidden="true" className="text-sm font-bold">X</span>}
            {showLabels ? <span>{label}</span> : null}
          </a>
        );
      })}
    </div>
  );
}
