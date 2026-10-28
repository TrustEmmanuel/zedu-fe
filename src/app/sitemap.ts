import type { MetadataRoute } from "next";
import { siteUrl } from "~/lib/env-urls";

const MARKETING_PATHS = [
  "/",
  "/about",
  "/pricing",
  "/download",
  "/contact-sales",
  "/account",
  "/resources",
  "/policy",
  "/terms-of-service",
  "/products/buzz",
  "/products/channels",
  "/products/file-management",
  "/solutions/bootcamps",
  "/solutions/schools",
  "/solutions/universities",
  "/contributors",
  "/contributors/egrets",
  "/contributors/heron",
  "/contributors/ibis",
  "/contributors/lark",
  "/contributors/macaw",
  "/contributors/sparrow",
  "/contributors/zedu-condor",
  "/contributors/zedu-drongo",
  "/contributors/zedu-flamingo",
  "/contributors/zedu-gannet",
  "/contributors/zedu-jacana",
  "/contributors/zedu-kestrel",
  "/contributors/zedu-osprey",
  "/contributors/zedu-quetzal",
  "/contributors/zedu-toucan",
  "/contributors/zedu-weaver",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return MARKETING_PATHS.map((path) => ({
    url: siteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
