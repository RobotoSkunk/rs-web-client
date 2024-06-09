/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import icon from '@/assets/img/portfolio/development/wip/pixelman/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/wip/pixelman/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/wip/pixelman/2.webp';
import screenshot_3 from '@/assets/img/portfolio/development/wip/pixelman/3.webp';
import screenshot_4 from '@/assets/img/portfolio/development/wip/pixelman/4.webp';
import screenshot_5 from '@/assets/img/portfolio/development/wip/pixelman/5.webp';


export default {
	name: 'PixelMan Adventures',
	icon,
	description: `An upcoming free and open source platformer game, literally the first project I ever made. ` +
				 `Started in November 2018 with Game Maker Studio, then moved to Unity and now being developed with ` +
				 `Godot. Initially it was made as an experiment, and now I want to finish it. `,
	links: [
		{
			label: 'GitHub Repository',
			url: 'https://github.com/ClockBomb-Games/PixelMan-Adventures',
		},
		{
			label: 'Itch.io Page',
			url: 'https://clockbombgames.itch.io/pixelman-adventures',
		},
		{
			label: 'Legacy GitHub Repository',
			url: 'https://github.com/RobotoSkunk/PixelMan-GMS2',
		},
		{
			label: 'Legacy Gamejolt Page',
			url: 'https://gamejolt.com/games/pixelman/410001',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: `Main menu`,
		},
		{
			src: screenshot_2,
			alt: `In-game level editor`,
		},
		{
			src: screenshot_3,
			alt: `Level example 1`,
		},
		{
			src: screenshot_4,
			alt: `Level example 2`,
		},
		{
			src: screenshot_5,
			alt: `Level won screen`,
		},
	],
} as ProjectData;
