import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';

import tailwind from "@astrojs/tailwind";

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind()],
  
  adapter: vercel(),
});

/* 
----------  ANTES DE COMPILARLO HACER ESTOS CAMBIOS SI NO ESTAS EN UN ENTORNO VERCEL!!
se puede dejar asi para compilarlo como esta subido en el 11
export default defineConfig({
  output: 'static',   // 👈 cambia aquí
  integrations: [react(), tailwind()],
});
*/