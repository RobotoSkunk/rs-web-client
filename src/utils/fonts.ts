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

// Replaced Google fonts with local fonts due to connection problems while downloading fonts on build
import LocalFont from 'next/font/local';


export const robotoMono = LocalFont({
	src: '../assets/font/RobotoMono.woff2',
	weight: '400',
	display: 'swap',
});

export const robotoCondensed = LocalFont({
	src: '../assets/font/RobotoCondensed.woff2',
	weight: '300',
	display: 'swap',
});

export const roboto400 = LocalFont({
	src: '../assets/font/Roboto.woff2',
	weight: '400',
	display: 'swap',
});

export const roboto300 = LocalFont({
	src: '../assets/font/Roboto.woff2',
	weight: '300',
	display: 'swap',
});
