import profileJson from "../config/profile.json";
import contentJson from "../config/content.json";
import siteJson from "../config/site.json";
import type { ContentConfig, ProfileConfig, SiteConfig } from "../types/config";

function assert(cond: unknown, msg: string): asserts cond {
  if (!cond) throw new Error(`[config] ${msg}`);
}

export function validateProfile(p: ProfileConfig): ProfileConfig {
  assert(typeof p.displayName === "string", "profile.displayName must be a string");
  assert(typeof p.username === "string", "profile.username must be a string");
  assert(Array.isArray(p.links), "profile.links must be an array");
  assert(Array.isArray(p.socialLinks), "profile.socialLinks must be an array");
  return p;
}

export const profile = validateProfile(profileJson as ProfileConfig);
export const content = contentJson as ContentConfig;
export const site = siteJson as SiteConfig;

/** Allows only http(s) and mailto URLs; returns null otherwise. */
export function safeUrl(url: string): string | null {
  try {
    const u = new URL(url);
    return ["http:", "https:", "mailto:"].includes(u.protocol) ? u.href : null;
  } catch {
    return null;
  }
}
