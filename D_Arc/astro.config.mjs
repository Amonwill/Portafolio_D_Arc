import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel'; 

export default defineConfig({
  output: 'server', 
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: 'fqzw8ecf', 
      dataset: 'production',
      useCdn: false,
      studioUrl: 'https://jonathan-cruz-darc.sanity.studio/', // 4. Tu URL real del studio
    }),
  ],
});