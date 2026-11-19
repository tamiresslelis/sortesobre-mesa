import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // GitHub Pages serves the site under /<repo>/
  base: process.env.GITHUB_ACTIONS ? '/sortesobre-mesa/' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'Sorte sobre Mesa',
        short_name: 'Sorte',
        description: 'Sorteios rápidos para a mesa, no desktop e no celular.',
        theme_color: '#d32929',
        background_color: '#031519',
        display: 'standalone',
        start_url: '.',
        scope: '.',
        icons: [
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
    }),
  ],
});
