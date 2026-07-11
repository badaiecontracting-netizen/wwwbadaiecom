import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
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
  nitro: false,
});
