/*
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2024  Edgar Lima (RobotoSkunk)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { NextRequest, NextResponse, userAgent } from 'next/server';

import appDirectory from './data/app-directory';
import redirects from './data/joke-redirects';


export const config = {
	matcher: [
		{
			source: '/((?!assets|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
}


export function middleware(request: NextRequest)
{
	function pathExists()
	{
		for (const data of appDirectory) {
			if (request.nextUrl.pathname === data.path) {
				return true;
			}
		}

		return false;
	}

	function pathEquals(pathname: string)
	{
		return request.nextUrl.pathname === pathname;
	}

	function pathStartsWith(pathname: string)
	{
		return request.nextUrl.pathname.startsWith(pathname);
	}


	var status = 200;

	switch (true) {
		case pathStartsWith('/commissions'): {
			return NextResponse.redirect(new URL('/', request.url));
		}

		case pathEquals('/public'): {
			return NextResponse.redirect(new URL('/public/', request.url));
		}

		case pathEquals('/social'): {
			return NextResponse.redirect(new URL('/contact', request.url));
		}

		case pathEquals('/acknowledgements'): {
			return NextResponse.redirect(new URL('/open-source', request.url));
		}

		case pathStartsWith('/phpmyadmin'):
		case pathStartsWith('/myadmin'):
		case pathEquals('/admin'): {
			const redirect = redirects[Math.floor(Math.random() * (redirects.length - 1))];

			return NextResponse.redirect(new URL(redirect, request.url));
		}

		case pathEquals('/teapot'): {
			status = 418;
			break;
		}

		case !pathExists(): {
			status = 404;
		}
	}

	const hostname = request.headers.get('Host') || request.nextUrl.hostname;

	const isOnion = hostname.endsWith('.onion');
	const allowInsecure = isOnion || process.env.NODE_ENV !== 'production';
	const canonical = `https://${hostname}${request.nextUrl.pathname}`;
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
		allowInsecure ? '' : 'upgrade-insecure-requests;',
	];


	const { device } = userAgent(request);

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('X-Device-Type', device.type ?? 'desktop');
	requestHeaders.set('X-Canonical', canonical);
	requestHeaders.set('X-Nonce', nonce);


	const response = NextResponse.next({
		status,
		request: {
			headers: requestHeaders
		}
	});

	response.headers.set('Content-Security-Policy',   csp.join(' '));
	response.headers.set('X-UA-Compatible',           'IE=Edge');
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains;');
	response.headers.set('X-Frame-Options',           'sameorigin');
	response.headers.set('X-XSS-Protection',          '0; mode=block');
	response.headers.set('X-Content-Type-Options',    'nosniff');
	response.headers.set('Referrer-Policy',           'strict-origin-when-cross-origin');
	response.headers.set('Feature-Policy',            "microphone 'none'; geolocation 'none'; camera 'none';");
	response.headers.set('Keep-Alive',                'timeout=5');
	response.headers.set('X-Powered-By',              'Your mom');

	// CORS
	if (isOnion) {
		response.headers.set('Access-Control-Allow-Origin', '*');
		response.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	}


	return response;
}
