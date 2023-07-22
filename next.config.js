/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	// webpack: (config, { isServer }) => {
	// 	if (!isServer) {
	// 		config.node = {
	// 			fs: 'empty',
	// 		};
	// 	}

	// 	return config;
	// },
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		unoptimized: true,
	},
	swcMinify: true,
	optimizeFonts: true,
};

module.exports = nextConfig;
