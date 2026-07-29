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

import icon from '@/assets/img/portfolio/development/kawitech/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/kawitech/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/kawitech/2.webp';
import screenshot_3 from '@/assets/img/portfolio/development/kawitech/3.webp';
import screenshot_4 from '@/assets/img/portfolio/development/kawitech/4.webp';
import screenshot_5 from '@/assets/img/portfolio/development/kawitech/5.webp';
import screenshot_6 from '@/assets/img/portfolio/development/kawitech/6.webp';


export default {
	name: {
		'en-US': 'Kawi Tech',
		'es-MX': 'Kawi Tech',
	},
	icon,
	description: {
		'en-US': 'A commissioned website that I did along with my team for ITSPR Student Chapter of the Industrial ' +
				 'Engineering career to capture payments for attendance at the workshops given at the event.',
		'es-MX': 'Un sitio web comisionado que hice junto con mi equipo para el Capítulo Estudiantil de la Carrera ' +
				 'en Ingeniería Industrial del ITSPR para capturar los pagos de asistencias a talleres ofrecidos en ' +
				 'un evento.',
	},
	links: [ ],
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
				'en-US': 'Workshops page',
				'es-MX': 'Página de talleres',
			},
		},
		{
			src: screenshot_3,
			alt: {
				'en-US': 'Venues page',
				'es-MX': 'Páginas de sedes',
			},
		},
		{
			src: screenshot_4,
			alt: {
				'en-US': '"About us" page',
				'es-MX': 'Página "Acerca de nosotros"',
			},
		},
		{
			src: screenshot_5,
			alt: {
				'en-US': '"About us" organigam section',
				'es-MX': 'Sección del organigrama de "Acerca de nosotros"',
			},
		},
		{
			src: screenshot_6,
			alt: {
				'en-US': 'Sign up page',
				'es-MX': 'Página de registro',
			},
		},
	],
} as ProjectData;
