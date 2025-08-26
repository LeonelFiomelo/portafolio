// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://leonelfiomelo.dev',
  base: 'portafolio',

  integrations: [react(
    {
      include: ['**/react/*'],
    }
  )],

  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      }
    },
    plugins: [tailwindcss()]
  }
});