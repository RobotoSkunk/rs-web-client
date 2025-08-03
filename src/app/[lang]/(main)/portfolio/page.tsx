/**
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
**/

import { Metadata } from 'next';

import { getDictionary } from '@/app/dictionaries';

import PortfolioContent from './content';


export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: Localizations }>,
}): Promise<Metadata>
{
	const lang = (await params).lang;
	const dict = await getDictionary(lang);

	return {
		title: dict.pages.portfolio.h1,
	};
}

export default function Page({
	params,
}: {
	params: Promise<{ lang: Localizations }>
})
{
	// I got lazy so I just moved everything to content.tsx

	return (
		<PortfolioContent params={ params }/>
	);
}
