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

import { MetadataRoute } from 'next';

import appDirectory from '@/data/app-directory';
import aiCrawlers from '@/data/ai-crawlers';

import { locales } from '@/app/dictionaries';



export default function robots(): MetadataRoute.Robots
{
	const paths = appDirectory.filter(v => !v.validForSeo);
	const disallowedPaths: string[] = [];

	for (const path of paths) {
		disallowedPaths.push(path.path);

		for (const locale of locales) {
			disallowedPaths.push(`/${locale}${path.path}`);
		}
	}


	return {
		rules: [
			{
				userAgent: aiCrawlers,
				disallow: '/',
			},
			{
				userAgent: '*',
				disallow: disallowedPaths,
			}
		],
		sitemap: 'https://robotoskunk.com/sitemap.xml',
	};
}
