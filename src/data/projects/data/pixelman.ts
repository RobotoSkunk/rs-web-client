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

import icon from '@/assets/img/portfolio/development/wip/pixelman/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/wip/pixelman/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/wip/pixelman/2.webp';
import screenshot_3 from '@/assets/img/portfolio/development/wip/pixelman/3.webp';
import screenshot_4 from '@/assets/img/portfolio/development/wip/pixelman/4.webp';
import screenshot_5 from '@/assets/img/portfolio/development/wip/pixelman/5.webp';


export default {
	name: {
		'en-US': 'PixelMan Adventures',
		'es-MX': 'PixelMan Adventures',
	},
	icon,
	description: {
		'en-US': `An upcoming free and open source platformer game, literally the first project I ever made. ` +
				 `Started in November 2018 with Game Maker Studio, then moved to Unity and now being developed with ` +
				 `Godot. Initially it was made as an experiment, and now I want to finish it.`,
		'es-MX': `Un próximo juego plataformero gratis de código abierto, literalmente el primer proyecto que he ` +
				 `hecho. Lo comencé en noviembre de 2018 con Game Maker Studio, luego lo moví a Unity y ahora es ` +
				 `desarrollado en Godot. Inicialmente era solo un experimento, y ahora quiero terminarlo.`,
	},
	links: [
		{
			label: {
				'en-US': 'GitHub Repository',
				'es-MX': 'Repositorio de GitHub',
			},
			url: 'https://github.com/ClockBomb-Games/PixelMan-Adventures',
		},
		{
			label: {
				'en-US': 'Itch.io Page',
				'es-MX': 'Página de Itch.io',
			},
			url: 'https://clockbombgames.itch.io/pixelman-adventures',
		},
		{
			label: {
				'en-US': 'Legacy GitHub Repository',
				'es-MX': 'Repositorio Legacy de GitHub',
			},
			url: 'https://github.com/RobotoSkunk/PixelMan-GMS2',
		},
		{
			label: {
				'en-US': 'Legacy Gamejolt Page',
				'es-MX': 'Página Legacy de Gamejolt',
			},
			url: 'https://gamejolt.com/games/pixelman/410001',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: {
				'en-US': `Main menu`,
				'es-MX': `Menú principal`,
			},
		},
		{
			src: screenshot_2,
			alt: {
				'en-US': `In-game level editor`,
				'es-MX': `Editor de niveles del juego`,
			},
		},
		{
			src: screenshot_3,
			alt: {
				'en-US': `Level example 1`,
				'es-MX': `Ejemplo 1 de nivel`,
			},
		},
		{
			src: screenshot_4,
			alt: {
				'en-US': `Level example 2`,
				'es-MX': `Ejemplo 2 de nivel`,
			},
		},
		{
			src: screenshot_5,
			alt: {
				'en-US': `Level won screen`,
				'es-MX': `Pantalla de nivel superado`,
			},
		},
	],
} as ProjectData;
