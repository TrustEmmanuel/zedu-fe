import type { MetadataRoute } from "next";
import { siteUrl } from "~/lib/env-urls";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/auth/",
        "/billing",
        "/api/",
        "/accept_org_invitation",
        "/accept_general_invitation",
      ],
    },
    sitemap: siteUrl("/sitemap.xml"),
  };
}
