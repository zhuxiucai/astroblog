// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.alotus.com.cn',
    integrations: [mdx(), sitemap(), sentry(), spotlightjs()],
    server: {
        host: '0.0.0.0'	
    }
})