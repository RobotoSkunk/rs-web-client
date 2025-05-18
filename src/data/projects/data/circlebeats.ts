/**
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
**/

import icon from '@/assets/img/portfolio/development/wip/circlebeats/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/wip/circlebeats/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/wip/circlebeats/2.webp';


export default {
	name: {
		'es-MX': 'CircleBeats',
		'en-US': 'CircleBeats',
	},
	icon,
	description: {
		'en-US': `An upcoming experimental bullet hell video game I've been working on just for fun. ` +
				 `Originally it was being made with Unity, but due to some problems with the engine on Linux, ` +
				 `I decided to move it to Godot instead.`,
		'es-MX': `Un próximo videojuego bullet hell experimental que he estado desarrollando por diversión. ` +
				 `Originalmente iba a ser desarrollado con Unity, sin embargo, debido a algunos problemas con ` +
				 `el motor en Linux, decidí moverlo a Godot.`,
	},
	links: [
		{
			label: {
				'en-US': 'GitHub Repository',
				'es-MX': 'Repositorio de GitHub',
			},
			url: 'https://github.com/RobotoSkunk/CircleBeats',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: {
				'en-US': `Progress made with Unity in 2023`,
				'es-MX': `Progreso hecho con Unity en 2023`,
			},
		},
		{
			src: screenshot_2,
			alt: {
				'en-US': `Progress made with Godot in January, 2024`,
				'es-MX': `Progreso hecho con Godot en enero de 2024`,
			},
		},
	],
} as ProjectData;
