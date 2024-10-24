import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';


import purgecss from 'astro-purgecss';


// https://astro.build/config
export default defineConfig({
  site: 'https://ensa-teppichreinigung.de',
  integrations: [tailwind(), react(), sitemap(), robotsTxt(), purgecss({
    content:['src/**']
  })]
});