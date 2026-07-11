import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/equipment" },
      { path: "/projects" },
      { path: "/gallery" },
      { path: "/clients" },
      { path: "/safety" },
      { path: "/contact" },
      { path: "/privacy" },
      { path: "/terms" },
    ],
  },
  nitro: {
    preset: "github_pages",
  },
});
