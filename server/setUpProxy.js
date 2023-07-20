import * as express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const proxy = () => {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://newsapi.org/v2',
			changeOrigin: true,
		}),
	);
};

module.exports = proxy;
