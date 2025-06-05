// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.alotus.com.cn',
	integrations: [mdx(), sitemap()],
	server: {
		host: '0.0.0.0'	
	}
})
