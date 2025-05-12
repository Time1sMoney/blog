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
    gfm: true
  },
  // Enable React to support React JSX components.
  integrations: [
    react(),
    mdx({
      shikiConfig: {
        themes: { light: 'min-light', dark: 'min-dark' },
        wrap: true
      }
    }),
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
