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

import icon from '@/assets/img/portfolio/development/wip/gamink/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/wip/gamink/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/wip/gamink/2.webp';


export default {
	name: {
		'en-US': 'Gamink',
		'es-MX': 'Gamink',
	},
	icon,
	description: {
		'en-US': `An upcoming free and open source rasterized and vectorial painting and animation software written ` +
				 `in C++ with GTK4, as an alternative to big tech softwares like Adobe Animate or Toon Boom Harmony, ` +
				 `focused mainly for videogames design.`,
		'es-MX': `Un próximo programa de dibujo y animación rasterizada y vectorial gratis de código abierto escrito ` +
				 `en C++ con GTK4, como una alternativa a los programas de las grandes compañías como Adobe Animate ` +
				 `o Toon Boom Harmony, principalmente enfocado en el diseño de videojuegos.`,
	},
	links: [
		{
			label: {
				'en-US': 'GitHub Repository',
				'es-MX': 'Repositorio de GitHub',
			},
			url: 'https://github.com/Limer-Software/gamink',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: {
				'en-US': `First test with one canvas`,
				'es-MX': `Primera prueba con un lienzo`,
			},
		},
		{
			src: screenshot_2,
			alt: {
				'en-US': `Second test with two canvases`,
				'es-MX': `Segunda prueba con dos lienzos`,
			},
		},
	],
} as ProjectData;
