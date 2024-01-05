import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// Import /static for a static site
import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8
  }),
  integrations: [react(), tailwind()]
});
