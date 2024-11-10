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
	name: 'Sistema de Modelado de Calidad del Aire de Veracruz (SiMoCAVer)',
	icon,
	description: 'I worked on the installation of a scientific computing system to calculate the air quality of the' +
				 'state of Veracruz using satellite information, which was presented to the Governor of Veracruz' +
				 'during a COVEICYDET event on September 18, 2024',
	links: [
		{ // Line length excuse: URL is too long
			label: 'COVEICYDET\'s Post',
			url: 'https://ciencia.covecyt.gob.mx/coveicydet-realiza-encuentro-para-mostrar-avances-en-ciencia-y-tecnologia/',
		},
		{ // Line length excuse: URL is too long
			label: 'Scientific Research Book',
			url: 'https://static1.squarespace.com/static/55564587e4b0d1d3fb1eda6b/t/668ddd4cfbcc727de1c33c6f/1720573265095/Innovaci%C3%B3n+y+Excelencia+en+la+Investigaci%C3%B3n+Cient%C3%ADfica+%E2%80%93+Ingenier%C3%ADas+%E2%80%93+Academia+Journals+Chiapas+2024.pdf',
		},
		{
			label: 'Installation Report',
			url: 'https://drive.proton.me/urls/XGQ0DZADX4#6n0lQeINIO9q',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: 'Temperature and precipitation map output with Ncview at COVEICYDET',
		},
		{
			src: screenshot_2,
			alt: 'Temperature map output with Ncview',
		},
		{
			src: screenshot_3,
			alt: 'Presentation table at COVEICYDET',
		},
		{
			src: screenshot_4,
			alt: 'ITSPR table at COVEICYDET',
		},
		{
			src: screenshot_5,
			alt: 'COVEICYDET information',
		},
		{
			src: screenshot_6,
			alt: 'General view of COVEICYDET at KANÁ a day before the event',
		},
	],
} as ProjectData;
