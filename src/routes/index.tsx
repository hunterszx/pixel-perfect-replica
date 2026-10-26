import { createFileRoute } from "@tanstack/react-router";
import App from "../App";
import site from "../config/site.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.defaultTitle },
      { name: "description", content: site.description },
      { name: "keywords", content: site.keywords.join(", ") },
      { name: "author", content: site.author },
      { name: "robots", content: site.robots },
      { name: "theme-color", content: site.themeColor },
      { property: "og:title", content: site.defaultTitle },
      { property: "og:description", content: site.description },
      { property: "og:type", content: site.openGraph.type },
      { property: "og:site_name", content: site.openGraph.siteName },
      { name: "twitter:card", content: site.twitter.card },
    ],
    scripts: site.structuredData
      ? [{ type: "application/ld+json", children: JSON.stringify(site.structuredData) }]
      : [],
  }),
  component: App,
});
