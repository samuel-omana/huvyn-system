import type { OpenNextConfig } from 'opennextjs-cloudflare';

const config: OpenNextConfig = {
	default: {
		override: {
			wrapper: 'cloudflare-node', // Use Cloudflare Node.js compatibility layer
		},
	},
	middleware: {
		external: true, // Run middleware on Edge
		override: {
			wrapper: 'cloudflare-edge',
		},
	},
};

export default config;
