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

export default [
	{
		path: '/',
		priority: 1,
		validForSeo: true,
	},
	{
		path: '/contact',
		priority: 1,
		validForSeo: true,
	},
	{
		path: '/open-source',
		priority: 0.3,
		validForSeo: true,
	},
	{
		path: '/illustrations',
		priority: 1,
		validForSeo: true,
	},
	{
		path: '/portfolio',
		priority: 1,
		validForSeo: true,
	},
	{
		path: '/privacy',
		priority: 1,
		validForSeo: true,
	},
	// {
	// 	path: '/commissions',
	// 	priority: 1,
	// 	validForSeo: true,
	// },
	{
		path: '/support-me',
		priority: 0.5,
		validForSeo: true,
	},
	{
		path: '/legal',
		priority: 0.5,
		validForSeo: true,
	},
	{
		path: '/alex-skunk',
		priority: 0,
		validForSeo: true,
	},
	{
		path: '/noscript',
		priority: 0,
		validForSeo: false,
	},
	{
		path: '/public/*',
		priority: 0,
		validForSeo: false,
	},
] as PathData[];
