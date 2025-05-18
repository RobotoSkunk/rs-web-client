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

import icon from '@/assets/img/portfolio/development/siwini-challenge/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/siwini-challenge/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/siwini-challenge/2.webp';
import screenshot_3 from '@/assets/img/portfolio/development/siwini-challenge/3.webp';
import screenshot_4 from '@/assets/img/portfolio/development/siwini-challenge/4.webp';
import screenshot_5 from '@/assets/img/portfolio/development/siwini-challenge/5.webp';
import screenshot_6 from '@/assets/img/portfolio/development/siwini-challenge/6.webp';
import screenshot_7 from '@/assets/img/portfolio/development/siwini-challenge/7.webp';


export default {
	name: {
		'en-US': 'Siwini Challenge Poza Rica',
		'es-MX': 'Siwini Challenge Poza Rica',
	},
	icon,
	description: {
		'en-US': 'A simple website that Instituto Tecnológico Superior de Poza Rica requested me to register ' +
				 'the projects and teams for their mechatronic event.',
		'es-MX': 'Una página simple que el Instituto Tecnológico Superior de Poza Rica me solicitó para registrar ' +
				 'los proyectos y equipos para su evento de mecatrónica.',
	},
	links: [
		{
			label: {
				'en-US': 'GitHub Repository',
				'es-MX': 'Repositorio de GitHub',
			},
			url: 'https://github.com/RobotoSkunk/siwini-challenge',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: {
				'en-US': 'Home page',
				'es-MX': 'Página de inicio',
			},
		},
		{
			src: screenshot_2,
			alt: {
				'en-US': 'Challenge instructions page',
				'es-MX': 'Página de instrucciones del reto',
			},
		},
		{
			src: screenshot_3,
			alt: {
				'en-US': 'Event calendar page',
				'es-MX': 'Página de calendarios de eventos',
			},
		},
		{
			src: screenshot_4,
			alt: {
				'en-US': 'Register main page',
				'es-MX': 'Página principal de registro',
			},
		},
		{
			src: screenshot_5,
			alt: {
				'en-US': 'Register to event page',
				'es-MX': 'Página de registro al evento',
			},
		},
		{
			src: screenshot_6,
			alt: {
				'en-US': 'Validate payment page',
				'es-MX': 'Página de validación de pago',
			},
		},
		{
			src: screenshot_7,
			alt: {
				'en-US': 'Winners chart page',
				'es-MX': 'Página de tabla de ganadores',
			},
		},
	],
} as ProjectData;
