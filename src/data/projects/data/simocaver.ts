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

import icon from '@/assets/img/portfolio/development/simocaver/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/simocaver/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/simocaver/2.webp';
import screenshot_3 from '@/assets/img/portfolio/development/simocaver/3.webp';
import screenshot_4 from '@/assets/img/portfolio/development/simocaver/4.webp';
import screenshot_5 from '@/assets/img/portfolio/development/simocaver/5.webp';
import screenshot_6 from '@/assets/img/portfolio/development/simocaver/6.webp';


export default {
	name: {
		'en-US': 'Veracruz Air Quality Modeling System (SiMoCAVer in Spanish)',
		'es-MX': 'Sistema de Modelado de Calidad del Aire de Veracruz (SiMoCAVer)',
	},
	icon,
	description: {
		'en-US': 'I worked on the installation of a scientific computing system to calculate the air quality of the ' +
				 'state of Veracruz using satellite information, which was presented to the Governor of Veracruz ' +
				 'during a COVEICYDET event on September 18, 2024',
		'es-MX': 'Trabajé en la instalación de un sistema de computación científica para calcular la calidad del ' +
				 'aire del estado de Veracruz usando información satelital, el cual fue presentado al gobernador ' +
				 'de Veracruz durante un evento del COVEICYDET el 18 de septiembre de 2024.',
	},
	links: [
		{ // Line length excuse: URL is too long
			label: {
				'en-US': 'COVEICYDET\'s Post',
				'es-MX': 'Publicación del COVEICYDET',
			},
			url: 'https://ciencia.covecyt.gob.mx/coveicydet-realiza-encuentro-para-mostrar-avances-en-ciencia-y-tecnologia/',
		},
		{ // Line length excuse: URL is too long
			label: {
				'en-US': 'Scientific Research Book',
				'es-MX': 'Libro de Investigación Científica',
			},
			url: 'https://static1.squarespace.com/static/55564587e4b0d1d3fb1eda6b/t/668ddd4cfbcc727de1c33c6f/1720573265095/Innovaci%C3%B3n+y+Excelencia+en+la+Investigaci%C3%B3n+Cient%C3%ADfica+%E2%80%93+Ingenier%C3%ADas+%E2%80%93+Academia+Journals+Chiapas+2024.pdf',
		},
		{
			label: {
				'en-US': 'Installation Report',
				'es-MX': 'Reporte de Instalación',
			},
			url: 'https://drive.proton.me/urls/XGQ0DZADX4#6n0lQeINIO9q',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: {
				'en-US': 'Temperature and precipitation map output with Ncview at COVEICYDET',
				'es-MX': 'Mapa de temperatura y precipitación con Ncview en el COVEICYDET',
			},
		},
		{
			src: screenshot_2,
			alt: {
				'en-US': 'Temperature map output with Ncview',
				'es-MX': 'Mapa de temperatura con Ncview',
			},
		},
		{
			src: screenshot_3,
			alt: {
				'en-US': 'Presentation table at COVEICYDET',
				'es-MX': 'Mesa de presentación en el COVEICYDET',
			},
		},
		{
			src: screenshot_4,
			alt: {
				'en-US': 'ITSPR table at COVEICYDET',
				'es-MX': 'Mesa del ITSPR en el COVEICYDET',
			},
		},
		{
			src: screenshot_5,
			alt: {
				'en-US': 'COVEICYDET information',
				'es-MX': 'Información del COVEICYDET',
			},
		},
		{
			src: screenshot_6,
			alt: {
				'en-US': 'General view of COVEICYDET at KANÁ a day before the event',
				'es-MX': 'Vista general del COVEICYDET en KANÁ un día antes del evento',
			},
		},
	],
} as ProjectData;
