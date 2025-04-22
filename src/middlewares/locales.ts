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

import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import locales from '@/data/locales';


const defaultLocale = 'es-US';

type LocalesResponse = {
	response: NextResponse | false;
	locale: string;
};


function getDefaultLocale(request: NextRequest): string
{
	const headers = {
		'accept-language': request.headers.get('accept-language') || 'en-US,en;q=0.5',
	};

	const requestedLocales = new Negotiator({ headers }).languages();

	return match(requestedLocales, locales, defaultLocale);
}


export function localesMiddleware(request: NextRequest): LocalesResponse
{
	const { pathname } = request.nextUrl;

	const pathnameHasLocal = locales.filter(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocal.length) {
		return {
			response: false,
			locale: pathnameHasLocal[0],
		};
	}


	const locale = getDefaultLocale(request);

	return {
		response: NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url)),
		locale,
	};
}
