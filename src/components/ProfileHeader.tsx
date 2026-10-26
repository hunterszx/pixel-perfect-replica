import { content, profile } from "../lib/config";

export function ProfileHeader() {
  const initials = profile.displayName.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const status = profile.status;
  return (
    <header className="profile-header">
      {profile.banner && <img className="profile-banner" src={profile.banner.src} alt={profile.banner.alt} />}
      <div className="avatar-wrap fade-up" style={{ animationDelay: "80ms" }}>
        {profile.avatar.src ? (
          <img className="avatar" src={profile.avatar.src} alt={profile.avatar.alt} width={112} height={112} />
        ) : (
          <div className="avatar avatar--fallback" role="img" aria-label={content.accessibility.avatarFallback}>{initials}</div>
        )}
        {status && <span className={`status-dot status-dot--${status.state}`} aria-hidden="true" />}
      </div>
      <h1 className="display-name fade-up" style={{ animationDelay: "160ms" }}>{profile.displayName}</h1>
      <p className="username fade-up" style={{ animationDelay: "200ms" }}>@{profile.username}</p>
      {status && (
        <p className="status-pill fade-up" style={{ animationDelay: "240ms" }}>
          <span className="sr-only">{content.status[status.state]}: </span>
          <span aria-hidden="true">{content.status[status.state]} ·</span> {status.text}
        </p>
      )}
      <p className="bio fade-up" style={{ animationDelay: "280ms" }}>{profile.bio}</p>
    </header>
  );
}
