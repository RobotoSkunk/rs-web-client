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

import icon from '@/assets/img/portfolio/development/genesis-bot/icon.webp';

import screenshot_1 from '@/assets/img/portfolio/development/genesis-bot/1.webp';
import screenshot_2 from '@/assets/img/portfolio/development/genesis-bot/2.webp';
import screenshot_3 from '@/assets/img/portfolio/development/genesis-bot/3.webp';
import screenshot_4 from '@/assets/img/portfolio/development/genesis-bot/4.webp';
import screenshot_5 from '@/assets/img/portfolio/development/genesis-bot/5.webp';
import screenshot_6 from '@/assets/img/portfolio/development/genesis-bot/6.webp';
import screenshot_7 from '@/assets/img/portfolio/development/genesis-bot/7.webp';
import screenshot_8 from '@/assets/img/portfolio/development/genesis-bot/8.webp';
import screenshot_9 from '@/assets/img/portfolio/development/genesis-bot/9.webp';


export default {
	name: {
		'en-US': 'Génesis Discord Bot',
		'es-MX': 'Génesis, Bot de Discord',
	},
	icon,
	description: {
		'en-US': 'A commissioned Discord bot to sell roles, avatars and profile banners, provide a looting ' +
				 'system and a lot more for a private Discord server.',
		'es-MX': 'Un bot de Discord comisionado para vender roles, avatares y portadas de perfil, provee un sistema ' +
				 'de recompensas al azar y mucho más para un servidor privado de Discord.',
	},
	links: [
		{
			label: {
				'en-US': 'Discord Server',
				'es-MX': 'Servidor de Discord',
			},
			url: 'https://discord.gg/NX9s3GMADw',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: {
				'en-US': 'Génesis commands list',
				'es-MX': 'Lista de comandos de Génesis',
			},
		},
		{
			src: screenshot_2,
			alt: {
				'en-US': 'Roles shop command',
				'es-MX': 'Comando de tienda de roles',
			},
		},
		{
			src: screenshot_3,
			alt: {
				'en-US': 'Profile command',
				'es-MX': 'Comando de perfil',
			},
		},
		{
			src: screenshot_4,
			alt: {
				'en-US': 'Purchases command',
				'es-MX': 'Comando de compras',
			},
		},
		{
			src: screenshot_5,
			alt: {
				'en-US': 'Avatars shop command',
				'es-MX': 'comando de tienda de avatares',
			},
		},
		{
			src: screenshot_6,
			alt: {
				'en-US': 'Purchase avatar embed',
				'es-MX': 'Embed de comprar avatar',
			},
		},
		{
			src: screenshot_7,
			alt: {
				'en-US': 'Claim loot command',
				'es-MX': 'Comando de reclamar recompensa',
			},
		},
		{
			src: screenshot_8,
			alt: {
				'en-US': 'Leaderboard command',
				'es-MX': 'Comando de tabla de clasificaciones',
			},
		},
		{
			src: screenshot_9,
			alt: {
				'en-US': 'Inventory command',
				'es-MX': 'Comando de inventario',
			},
		},
	],
} as ProjectData;
