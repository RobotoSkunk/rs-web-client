/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2026  Edgar Lima (RobotoSkunk)
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

import {
	layout,
	prefix,
	route,
	type RouteConfig
} from '@react-router/dev/routes';


export default [
	layout('./routes/error/layout.tsx', [
		route('*', './routes/error/index.tsx'),
	]),
	...prefix(':lang', [
		layout('./routes/main/layout.tsx', [
			route('/', './routes/main/home/index.tsx'),
			route('/another', './routes/main/another/index.tsx'),
			route('/illustrations', './routes/main/illustrations/index.tsx'),
		]),
	]),
] satisfies RouteConfig;
