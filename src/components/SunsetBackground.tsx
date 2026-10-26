import sunset from "../assets/sunset.jpg";
import { content } from "../lib/config";

export function SunsetBackground() {
  return (
    <div className="sunset-bg" aria-hidden="false">
      <img src={sunset} alt={content.accessibility.background} width={1920} height={1088} className="sunset-bg__img" />
      <div className="sunset-bg__glow" />
      <div className="sunset-bg__overlay" />
    </div>
  );
}
