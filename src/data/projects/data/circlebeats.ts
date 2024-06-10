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
