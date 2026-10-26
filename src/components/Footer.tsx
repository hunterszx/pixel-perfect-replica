import { content, profile } from "../lib/config";

export function Footer() {
  return (
    <footer className="footer fade-up" style={{ animationDelay: "800ms" }}>
      <span>© {new Date().getFullYear()} {profile.displayName}</span>
      <span aria-hidden="true">·</span>
      <span>{content.footer.text}</span>
    </footer>
  );
}
