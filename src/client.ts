import Elysia from 'elysia';
import cors from '@elysia/cors';

import html from './client/index.html';


export const client = new Elysia()
	.use(cors())
	.onBeforeHandle(({ set, request }) =>
	{
		const url = new URL(request.url);

		const isOnion = url.hostname.endsWith('.onion');
		const allowInsecure = isOnion || process.env.NODE_ENV !== 'production';
		const nonce = Buffer.from(crypto.getRandomValues(new Uint32Array(32))).toString('base64url');

		const csp = [
			`default-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${ allowInsecure ? "'unsafe-eval'" : '' };`,
			`style-src 'self' 'unsafe-inline';`,
			`img-src 'self' blob: data:;`,
			`font-src 'self';`,
			`object-src 'none';`,
			`base-uri 'self';`,
			`form-action 'self';`,
			`frame-ancestors 'none';`,
			`connect-src 'self';`,
			allowInsecure ? '' : 'upgrade-insecure-requests;',
		];

		set.headers['content-security-policy'] = csp.join(' ');
	})
	.get('/:lang/*', html);
