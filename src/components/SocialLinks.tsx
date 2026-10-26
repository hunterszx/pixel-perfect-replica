import { content, profile, safeUrl } from "../lib/config";
import { Icon } from "../lib/icons";

export function SocialLinks() {
  const items = profile.socialLinks.filter((s) => safeUrl(s.url));
  if (!items.length) return <p className="empty">{content.emptyStates.socials}</p>;
  return (
    <nav aria-label={content.accessibility.socialNav} className="socials fade-up" style={{ animationDelay: "340ms" }}>
      {items.map((s) => (
        <a key={s.platform} href={safeUrl(s.url)!} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={`${s.label} ${content.labels.opensInNewTab}`} title={s.label}>
          <Icon name={s.icon} className="icon" />
        </a>
      ))}
    </nav>
  );
}
