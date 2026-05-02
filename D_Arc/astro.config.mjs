import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
// PARA DESPLEGAR EN NETLIFY
import netlify from '@astrojs/netlify'; 

export default defineConfig({
  output: 'server', 
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      // CONEXION CON SANITY PARA OBTENER LAS IMAGENES Y LOS DATOS DE LOS PROYECTOS
      projectId: 'fqzw8ecf', 
      dataset: 'production',
      useCdn: false,
      studioUrl: '/admin',
    }),
  ],
});