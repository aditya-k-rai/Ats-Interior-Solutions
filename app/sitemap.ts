import type { MetadataRoute } from "next";
import { blogPosts, cities, getLandingPages, projects, services, site } from "@/data/site";
import { societiesData } from "@/data/societies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const fixed = [
    "",
    "/services",
    "/locations",
    "/societies",
    "/portfolio",
    "/testimonials",
    "/about",
    "/privacy",
    "/faq",
    "/cost-calculator",
    "/contact",
    "/blog",
    "/process",
    "/book-consultation"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));

  const servicePages = services.map((service) => ({
    url: `${base}/${service.slug}`,
    lastModified: new Date()
  }));

  const localPages = getLandingPages().map((page) => ({
    url: `${base}/${page.slug}`,
    lastModified: new Date()
  }));

  const societyPages = societiesData.map((society) => ({
    url: `${base}/societies/${society.slug}`,
    lastModified: new Date()
  }));

  const cityHubs = cities.map((city) => ({
    url: `${base}/locations/${city.slug}`,
    lastModified: new Date()
  }));

  const projectPages = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  const posts = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date()
  }));

  return [...fixed, ...servicePages, ...localPages, ...societyPages, ...cityHubs, ...projectPages, ...posts];
}
