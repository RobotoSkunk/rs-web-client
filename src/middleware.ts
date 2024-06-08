/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import { NextRequest, NextResponse } from 'next/server';


export const config = {
	matcher: [
		{
			source: '/((?!assets|_next/static|_next/image|favicon.ico).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
}


export function middleware(request: NextRequest)
{
	switch (request.nextUrl.pathname) {
		case '/social': {
			return NextResponse.redirect(new URL('/contact', request.url));
		}

		case '/phpmyadmin':
		case '/myadmin':
		case '/admin': {
			const redirects = [
				'https://www.youtube.com/watch?v=hiRacdl02w4&t=46s',
				'https://www.youtube.com/watch?v=wAMZ6KpMGQI',
				'https://www.youtube.com/watch?v=VZzSBv6tXMw',
				'https://www.youtube.com/watch?v=MobkO51msMI',
				'https://www.youtube.com/watch?v=vX-PsnRXWX8',
				'https://www.youtube.com/watch?v=5ANKM2JnZYo',
				'https://www.youtube.com/watch?v=DmH6YPWhaDY',
				'https://www.youtube.com/watch?v=ftYwX5hn7dY',
				'https://www.youtube.com/watch?v=jeg_TJvkSjg',
				'https://www.youtube.com/watch?v=AdF2uk-EscE',
				'https://www.youtube.com/watch?v=XC_T5mvuguw',
				'https://www.youtube.com/watch?v=WfYyBp4Ln2s',
				'https://www.youtube.com/watch?v=Hw1ncADC9KM',
				'https://www.youtube.com/watch?v=FR7wOGyAzpw&t=85s',
				'https://www.youtube.com/watch?v=srZdDAJbHfc&t=10471s',
				'https://www.youtube.com/watch?v=m7EhR8wOVxg',
				'https://www.youtube.com/watch?v=hzVm_Cdcsew',
				'https://www.youtube.com/watch?v=rF-O6Z3sk8c',
				'https://www.youtube.com/watch?v=oIkhgagvrjI',
				'https://www.youtube.com/watch?v=MLsbc-dFWS8',
			];

			const redirect = redirects[Math.floor(Math.random() * (redirects.length - 1))];


			return NextResponse.redirect(new URL(redirect, request.url));
		}
	}


	const allowInsecure = request.nextUrl.hostname.endsWith('.onion') || process.env.NODE_ENV !== 'production';

	const csp = [
		`default-src 'self' 'unsafe-hashes' 'unsafe-inline' ${ allowInsecure ? "'unsafe-eval'" : '' };`,
		`img-src 'self' blob: data:;`,
		`font-src 'self';`,
		`object-src 'none';`,
		`base-uri 'self';`,
		`form-action 'self';`,
		`frame-ancestors 'none';`,
		allowInsecure ? '' : 'upgrade-insecure-requests;',
	];

	var status = 200;

	if (request.nextUrl.pathname === '/teapot') {
		status = 418;
	}

	const response = NextResponse.next({
		status,
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


	return response;
}
