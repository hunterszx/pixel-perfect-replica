import { ArrowUpRight } from "lucide-react";
import { content, safeUrl } from "../lib/config";
import { Icon } from "../lib/icons";
import type { ProfileLink } from "../types/config";

export function LinkCard({ link, index }: { link: ProfileLink; index: number }) {
  const href = safeUrl(link.url);
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`link-card fade-up ${link.wide ? "link-card--wide" : ""}`} style={{ animationDelay: `${460 + index * 70}ms` }}>
      {link.thumbnail ? (
        <img src={link.thumbnail} alt="" className="link-card__thumb" loading="lazy" />
      ) : (
        <span className="link-card__icon"><Icon name={link.icon} className="icon" /></span>
      )}
      <span className="link-card__body">
        <span className="link-card__title">{link.title}</span>
        <span className="link-card__desc">{link.description}</span>
      </span>
      <ArrowUpRight className="link-card__arrow" aria-hidden="true" />
      <span className="sr-only">{content.labels.opensInNewTab}</span>
    </a>
  );
}
