import { content, profile } from "../lib/config";
import { LinkCard } from "./LinkCard";

export function LinkGrid() {
  return (
    <section aria-label={content.accessibility.linksRegion}>
      <h2 className="section-title fade-up" style={{ animationDelay: "440ms" }}>{content.sections.links}</h2>
      {profile.links.length ? (
        <div className="link-grid">
          {profile.links.map((l, i) => <LinkCard key={l.title} link={l} index={i} />)}
        </div>
      ) : (
        <p className="empty">{content.emptyStates.links}</p>
      )}
    </section>
  );
}
