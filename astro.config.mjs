// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});