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


import createMDX from '@next/mdx';


/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: false,
	pageExtensions: [
		'js',
		'jsx',
		'md',
		'mdx',
		'ts',
		'tsx',
	],
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
})
 
export default withMDX(nextConfig);
