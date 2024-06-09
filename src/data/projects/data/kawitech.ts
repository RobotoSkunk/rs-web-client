/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import icon from '@/assets/img/portfolio/development/kawitech/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/kawitech/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/kawitech/2.webp';
import screenshot_3 from '@/assets/img/portfolio/development/kawitech/3.webp';
import screenshot_4 from '@/assets/img/portfolio/development/kawitech/4.webp';
import screenshot_5 from '@/assets/img/portfolio/development/kawitech/5.webp';
import screenshot_6 from '@/assets/img/portfolio/development/kawitech/6.webp';


export default {
	name: 'Kawi Tech',
	icon,
	description: 'A commissioned website that I did along with my team for ITSPR Student Chapter of the Industrial ' +
				 'Engineering career to capture payments for attendance at the workshops given at the event.',
	links: [ ],
	screenshots: [
		{
			src: screenshot_1,
			alt: 'Home page',
		},
		{
			src: screenshot_2,
			alt: 'Workshops page',
		},
		{
			src: screenshot_3,
			alt: 'Venues page',
		},
		{
			src: screenshot_4,
			alt: '"About us" page',
		},
		{
			src: screenshot_5,
			alt: '"About us" organigam section',
		},
		{
			src: screenshot_6,
			alt: 'Sign up page',
		},
	],
} as ProjectData;
