import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import astroIcon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import remarkToc from 'remark-toc';
// https://astro.build/config
export default defineConfig({
  site: 'https://blog-codercoin.vercel.app',
  prefetch: {
    prefetchAll: true
  },
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAccessibleEmojis],
    syntaxHighlight: 'shiki',
    gfm: true,
    shikiConfig: {
      themes: { light: 'one-light', dark: 'catppuccin-mocha' },
      wrap: true
    }
  },
  image: {
    domains: ['astro:build','picsum.photos'],
    remotePatterns: [{
      protocol: 'https',
    }]
  },
  // Enable React to support React JSX components.
  integrations: [
    react(),
    mdx(),
    astroIcon({
      include: {
        tabler: ['*'],
        ri: ['bilibili-line']
      }
    })
  ],
  vite: {
    plugins: [tailwind()]
  },
  experimental: {
    responsiveImages: true
  }
});
