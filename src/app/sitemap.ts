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

import { MetadataRoute } from 'next';


export default function sitemap(): MetadataRoute.Sitemap
{
	return [
		{
			url: 'https://robotoskunk.com',
			lastModified: new Date(2024, 4, 28),
			priority: 1,
		},
		{
			url: 'https://robotoskunk.com/about',
			lastModified: new Date(2024, 4, 29),
			priority: 1,
		},
		{
			url: 'https://robotoskunk.com/portfolio',
			lastModified: new Date(2024, 9, 8),
			priority: 1,
		},
		{
			url: 'https://robotoskunk.com/contact',
			lastModified: new Date(2024, 5, 9),
			priority: 1,
		},
		{
			url: 'https://robotoskunk.com/support-me',
			lastModified: new Date(2024, 5, 9),
			priority: 1,
		},
		{
			url: 'https://robotoskunk.com/open-source',
			lastModified: new Date(2024, 5, 9),
		},
	];
}
