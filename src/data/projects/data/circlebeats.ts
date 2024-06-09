/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import icon from '@/assets/img/portfolio/development/wip/circlebeats/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/wip/circlebeats/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/wip/circlebeats/2.webp';


export default {
	name: 'CircleBeats',
	icon,
	description: `An upcoming experimental bullet hell video game I've been working on just for fun. ` +
				 `Originally it was being made with Unity, but due to some problems with the engine on Linux, ` +
				 `I decided to move it to Godot instead.`,
	links: [
		{
			label: 'GitHub Repository',
			url: 'https://github.com/RobotoSkunk/CircleBeats',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: `Progress made with Unity last year`,
		},
		{
			src: screenshot_2,
			alt: `Progress made with Godot in January`,
		},
	],
} as ProjectData;
