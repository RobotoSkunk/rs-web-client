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

import appDirectory from '@/data/app-directory';
import { MetadataRoute } from 'next';

import { locales } from '@/app/dictionaries';


export default function sitemap(): MetadataRoute.Sitemap
{
	const root = 'https://robotoskunk.com';

	return appDirectory.filter(v => v.validForSeo).map((value) =>
	{
		const languages: { [ key: string]: string } = {};

		for (const locale of locales) {
			languages[locale] = `${root}/${locale}${value.path}`;
		}

		return {
			url: `${root}${value.path}`,
			priority: value.priority,
			alternates: {
				languages,
			},
		};
	});
}
