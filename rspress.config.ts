import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss';
import { defineConfig } from '@rspress/core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// For GitHub Pages project sites set BASE=/your-repo-name/ when building.
const base = process.env.BASE ?? '/';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base,
  title: 'Qiniso Xulu | Software Engineer',
  description:
    'Junior software engineer in Johannesburg. Founder of Vennor and creator of the open source Lynxkit.',
  icon: '/favicon.svg',
  lang: 'en',
  search: false,
  globalStyles: path.join(__dirname, 'tailwind.css'),
  head: [
    '<meta name="theme-color" content="#0e0e0f">',
    '<meta property="og:title" content="Qiniso Xulu | Software Engineer">',
    '<meta property="og:description" content="Junior software engineer in Johannesburg. Founder of Vennor and creator of the open source Lynxkit.">',
    '<meta property="og:type" content="website">',
  ],
  themeConfig: {
    // One page: the site draws its own header, so Rspress's nav is hidden.
    nav: [],
  },
  builderConfig: {
    plugins: [pluginTailwindcss()],
  },
});
