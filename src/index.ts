import Elysia, { file } from 'elysia';
import staticPlugin from '@elysia/static';
import cors from '@elysia/cors';

import html from './client/index.html';
import { client } from './client';


new Elysia()
	.use(cors())
	.use(staticPlugin({
		assets: './src/client/assets',
		prefix: '/assets',
	}))
	.get('/favicon.ico', file('./src/client/favicon.ico'))
	.use(client)
	.listen(3000);
