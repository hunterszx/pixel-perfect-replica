import { SunsetBackground } from "./components/SunsetBackground";
import { ProfileHeader } from "./components/ProfileHeader";
import { SocialLinks } from "./components/SocialLinks";
import { ProfileDetails } from "./components/ProfileDetails";
import { LinkGrid } from "./components/LinkGrid";
import { Footer } from "./components/Footer";
import { content } from "./lib/config";

export default function App() {
  return (
    <>
      <a href="#profile" className="skip-link">{content.accessibility.skipToContent}</a>
      <SunsetBackground />
      <main id="profile" className="page">
        <div className="profile-card">
          <ProfileHeader />
          <SocialLinks />
          <ProfileDetails />
        </div>
        <LinkGrid />
        <Footer />
      </main>
    </>
  );
}
