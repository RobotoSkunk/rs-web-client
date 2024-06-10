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

import icon from '@/assets/img/portfolio/development/siwini-challenge/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/siwini-challenge/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/siwini-challenge/2.webp';
import screenshot_3 from '@/assets/img/portfolio/development/siwini-challenge/3.webp';
import screenshot_4 from '@/assets/img/portfolio/development/siwini-challenge/4.webp';
import screenshot_5 from '@/assets/img/portfolio/development/siwini-challenge/5.webp';
import screenshot_6 from '@/assets/img/portfolio/development/siwini-challenge/6.webp';
import screenshot_7 from '@/assets/img/portfolio/development/siwini-challenge/7.webp';


export default {
	name: 'Swini Challenge Poza Rica',
	icon,
	description: 'A simple website that Instituto Tecnológico Superior de Poza Rica requested me to register ' +
				 'the projects and teams for their mechatronic event.',
	links: [
		{
			label: 'GitHub Repository',
			url: 'https://github.com/RobotoSkunk/siwini-challenge',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: 'Home page',
		},
		{
			src: screenshot_2,
			alt: 'Challenge instructions page',
		},
		{
			src: screenshot_3,
			alt: 'Event calendar page',
		},
		{
			src: screenshot_4,
			alt: 'Register main page',
		},
		{
			src: screenshot_5,
			alt: 'Register to event page',
		},
		{
			src: screenshot_6,
			alt: 'Validate payment page',
		},
		{
			src: screenshot_7,
			alt: 'Winners chart page',
		},
	],
} as ProjectData;
