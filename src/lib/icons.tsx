import {
  Camera, Code, Coffee, Github, Globe, Instagram, Link as LinkIcon, Mail, MapPin,
  Music, Sparkles, Twitter, Youtube, Twitch, Linkedin, Heart, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  camera: Camera, code: Code, coffee: Coffee, github: Github, globe: Globe,
  instagram: Instagram, mail: Mail, "map-pin": MapPin, music: Music,
  sparkles: Sparkles, twitter: Twitter, youtube: Youtube, twitch: Twitch,
  linkedin: Linkedin, heart: Heart, link: LinkIcon,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? LinkIcon;
  return <C className={className} aria-hidden="true" />;
}
