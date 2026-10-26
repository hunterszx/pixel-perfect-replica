import { content, profile } from "../lib/config";
import { Icon } from "../lib/icons";

export function ProfileDetails() {
  if (!profile.profileDetails.length) return null;
  return (
    <section aria-label={content.sections.details} className="details fade-up" style={{ animationDelay: "400ms" }}>
      {profile.profileDetails.map((d) => (
        <div key={d.label} className="detail-chip">
          <Icon name={d.icon} className="icon-sm" />
          <span className="sr-only">{d.label}: </span>
          <span>{d.value}</span>
        </div>
      ))}
    </section>
  );
}
