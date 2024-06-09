/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import icon from '@/assets/img/portfolio/development/wip/gamink/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/wip/gamink/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/wip/gamink/2.webp';


export default {
	name: 'Gamink',
	icon,
	description: `An upcoming free and open source rasterized and vectorial painting and animation software written ` +
				 `in C++ with GTK4, as an alternative to big tech softwares like Adobe Animate or Toon Boom Harmony, ` +
				 `focused mainly for videogames design.`,
	links: [
		{
			label: 'GitHub Repository',
			url: 'https://github.com/Limer-Software/gamink',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: `First test with one canvas`,
		},
		{
			src: screenshot_2,
			alt: `Second test with two canvases`,
		},
	],
} as ProjectData;
