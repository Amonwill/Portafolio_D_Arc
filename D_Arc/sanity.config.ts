import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// CONEXION A SANITY STUDIO
export default defineConfig({
  name: 'default',
  title: 'Portafolio DArc',
  projectId: 'fqzw8ecf', 
  dataset: 'production',   
  plugins: [structureTool()],
  schema: {
    types: [], 
  },
});