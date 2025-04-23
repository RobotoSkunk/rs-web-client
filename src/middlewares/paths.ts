/*
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2025  Edgar Lima (RobotoSkunk)
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

import { NextRequest, NextResponse } from 'next/server';

import appDirectory from '../data/app-directory';
import redirects from '../data/joke-redirects';


export function pathsMiddleware(request: NextRequest)
{
	const locale = request.headers.get('x-locale') as string;
	var urlPathname = request.nextUrl.pathname.replace(`/${locale}`, '');

	if (urlPathname === '') {
		urlPathname = '/';
	}


	function pathExists()
	{
		for (const data of appDirectory) {
			if (urlPathname === data.path) {
				return true;
			}
		}

		return false;
	}

	function pathEquals(pathname: string)
	{
		return urlPathname === pathname;
	}

	function pathStartsWith(pathname: string)
	{
		return urlPathname.startsWith(pathname);
	}


	switch (true) {
		case pathStartsWith('/commissions'): {
			return NextResponse.redirect(new URL(`/${locale}`, request.url));
		}

		case pathEquals('/public'):
		case pathEquals('/public/'): {
			return NextResponse.redirect(new URL('/public/', request.url));
		}

		case pathEquals('/social'): {
			return NextResponse.redirect(new URL(`/${locale}/contact`, request.url));
		}

		case pathEquals('/acknowledgements'): {
			return NextResponse.redirect(new URL(`/${locale}/open-source`, request.url));
		}

		case pathStartsWith('/phpmyadmin'):
		case pathStartsWith('/myadmin'):
		case pathEquals('/admin'): {
			const redirect = redirects[Math.floor(Math.random() * (redirects.length - 1))];

			return NextResponse.redirect(new URL(redirect, request.url));
		}

		case pathEquals('/teapot'): {
			return 418;
		}

		case !pathExists(): {
			return 404;
		}
	}

	return 200;
}
