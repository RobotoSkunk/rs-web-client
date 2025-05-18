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

import type { Metadata } from 'next';
import { roboto300 } from '@/utils/fonts';

import './globals.css';
import { getDictionary } from '@/app/dictionaries';


export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: Localizations }>
}): Promise<Metadata>
{
	const lang = (await params).lang;
	const dict = await getDictionary(lang);

	return {
		title: dict.errors['not-found'].title,
		robots: 'noindex, nofollow',
	};
};


export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: Localizations }>;
}>)
{
	const lang = (await params).lang;

	return (
		<html lang={ lang } suppressHydrationWarning={ true }>
			<body className={ roboto300.className }>
				{ children }

				<footer>
					<a href='/'>robotoskunk.com</a>
				</footer>
			</body>
		</html>
	);
}
