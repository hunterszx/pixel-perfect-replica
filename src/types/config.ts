export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
}

export interface ProfileDetail {
  icon: string;
  label: string;
  value: string;
}

export interface ProfileLink {
  title: string;
  description: string;
  icon: string;
  url: string;
  thumbnail?: string;
  wide?: boolean;
}

export interface ProfileConfig {
  displayName: string;
  username: string;
  bio: string;
  avatar: { src: string; alt: string };
  banner: { src: string; alt: string } | null;
  status: { state: "online" | "idle" | "offline"; text: string } | null;
  location: string | null;
  socialLinks: SocialLink[];
  profileDetails: ProfileDetail[];
  links: ProfileLink[];
}

export interface ContentConfig {
  sections: { socials: string; details: string; links: string };
  labels: { openLink: string; opensInNewTab: string };
  status: Record<"online" | "idle" | "offline", string>;
  accessibility: {
    avatarFallback: string;
    socialNav: string;
    linksRegion: string;
    background: string;
    skipToContent: string;
  };
  emptyStates: { links: string; socials: string };
  footer: { text: string; madeWith: string };
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  author: string;
  language: string;
  themeColor: string;
  robots: string;
  canonicalUrl: string;
  favicon: string;
  ogImage: string;
  openGraph: { type: string; locale: string; siteName: string };
  twitter: { card: string; site: string; creator: string };
  manifest: { name: string; shortName: string; backgroundColor: string };
  structuredData: Record<string, unknown> | null;
}
