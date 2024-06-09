/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
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
