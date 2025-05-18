/**
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
**/

import { NextRequest, NextResponse, userAgent } from 'next/server';


import { localesMiddleware } from './middlewares/locales';
import { pathsMiddleware } from './middlewares/paths';


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
	// #region Localization
	const localesResponse = localesMiddleware(request);

	if (localesResponse.response) {
		return localesResponse.response;
	}

	request.headers.set('x-locale', localesResponse.locale);
	// #endregion

	// #region Paths
	const pathsResponse = pathsMiddleware(request);

	if (typeof pathsResponse != 'number') {
		return pathsResponse;
	}

	const status = pathsResponse;
	// #endregion


	const hostname = request.headers.get('Host') || request.nextUrl.hostname;
	const canonicalPathname = request.nextUrl.pathname.replace(`/${localesResponse.locale}`, '');
	const lang = localesResponse.locale;

	const isOnion = hostname.endsWith('.onion');
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
		allowInsecure ? '' : 'upgrade-insecure-requests;',
	];


	const { device } = userAgent(request);

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('X-Device-Type', device.type ?? 'desktop');
	requestHeaders.set('X-Nonce', nonce);

	requestHeaders.set('X-Canonical', `https://${hostname}/${lang}${canonicalPathname}`);
	requestHeaders.set('X-Canonical-Root', `https://${hostname}`);
	requestHeaders.set('X-Canonical-Path', canonicalPathname);


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
