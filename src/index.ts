
import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { logger } from 'hono/logger';

import html from './client/index.html';

const app = new Hono();
app.use(logger());

app.use(serveStatic({ root: './src/client/static' }));


const server = Bun.serve({
	routes: {
		'/': html,
	},
	fetch: app.fetch,
	development: process.env.NODE_ENV == 'development',
});

console.log(`Server running on port ${server.port}`);
