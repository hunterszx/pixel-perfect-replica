import {
  Camera, Code, Coffee, Globe, Link as LinkIcon, Mail, MapPin, Music, Sparkles, Heart,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const lucide: Record<string, LucideIcon> = {
  camera: Camera, code: Code, coffee: Coffee, globe: Globe, mail: Mail,
  "map-pin": MapPin, music: Music, sparkles: Sparkles, heart: Heart, link: LinkIcon,
};

// Brand marks (Lucide no longer ships brand icons), drawn as simple stroke glyphs.
const brands: Record<string, ReactNode> = {
  github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  twitter: <path d="M4 4l16 16M20 4L4 20" />,
  youtube: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>,
  twitch: <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />,
  linkedin: <><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /></>,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const brand = brands[name];
  if (brand) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {brand}
      </svg>
    );
  }
  const C = lucide[name] ?? LinkIcon;
  return <C className={className} aria-hidden="true" />;
}
