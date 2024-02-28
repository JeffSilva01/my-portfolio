import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["cdn2.thecatapi.com"],
  },
  integrations: [tailwind()],
});
