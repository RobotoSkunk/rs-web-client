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

import cuteSkonk    from '@/assets/img/portfolio/artworks/cute-skonk.webp';
import eliCopter    from '@/assets/img/portfolio/artworks/eli-copter.webp';
import happySkunk   from '@/assets/img/portfolio/artworks/happy-skunk.webp';
import silence      from '@/assets/img/portfolio/artworks/silence.webp';
import peloBirthday from '@/assets/img/portfolio/artworks/srpelo-birthday.webp';
import stickerHappy from '@/assets/img/portfolio/artworks/sticker-happy.webp';
import sticker      from '@/assets/img/portfolio/artworks/sticker.webp';
import tongue       from '@/assets/img/portfolio/artworks/tongue.webp';
import unzor        from '@/assets/img/portfolio/artworks/unzor.webp';
import kyleKilled   from '@/assets/img/portfolio/artworks/why-did-you-kill-me.webp';
import why          from '@/assets/img/portfolio/artworks/why.webp';

import comm_SerpentBoi   from '@/assets/img/portfolio/artworks/commissions/serpent-boi.webp';
import comm_Miniponies_1 from '@/assets/img/portfolio/artworks/commissions/miniponies-1.webp';
import comm_Miniponies_2 from '@/assets/img/portfolio/artworks/commissions/miniponies-2.webp';
import comm_terry        from '@/assets/img/portfolio/artworks/commissions/terry.webp';
import comm_zarckets     from '@/assets/img/portfolio/artworks/commissions/zarckets.webp';


export default [
	{
		name: {
			'en-US': 'Commission for @Serpent_Boi',
			'es-MX': 'Comisión para @Serpent_Boi',
		},
		img: comm_SerpentBoi,
	},
	{
		name: {
			'en-US': 'Commission for @Miniponies25',
			'es-MX': 'Comisión para @Miniponies25',
		},
		img: comm_Miniponies_1,
	},
	{
		name: {
			'en-US': 'Commission for @Miniponies25',
			'es-MX': 'Comisión para @Miniponies25',
		},
		img: comm_Miniponies_2,
	},
	{
		name: {
			'en-US': 'Commission for @_Terry03',
			'es-MX': 'Comisión para @_Terry03',
		},
		img: comm_terry,
	},
	{
		name: {
			'en-US': 'Commission for @zarckets',
			'es-MX': 'Comisión para @zarckets',
		},
		img: comm_zarckets,
	},
	{
		name: {
			'en-US': 'Cute Skonk',
			'es-MX': 'Zorruno Lindo',
		},
		img: cuteSkonk,
	},
	{
		name: {
			'en-US': 'Eli-Copter',
			'es-MX': 'Eli-Cóptero',
		},
		img: eliCopter,
	},
	{
		name: {
			'en-US': 'Happy Skunk',
			'es-MX': 'Zorrillo Feliz',
		},
		img: happySkunk,
	},
	{
		name: {
			'en-US': 'SILENCE!!!',
			'es-MX': '¡¡¡SILENCIO!!!',
		},
		img: silence,
	},
	{
		name: {
			'en-US': "Gift for Sr. Pelo's Birthday",
			'es-MX': 'Regalo para el cumpleaños del Sr. Pelo',
		},
		img: peloBirthday,
	},
	{
		name: {
			'en-US': "Alex's Sticker",
			'es-MX': 'Sticker de Alex',
		},
		img: sticker,
	},
	{
		name: {
			'en-US': "Alex's Happy Sticker",
			'es-MX': 'Sticker de Alex Feliz',
		},
		img: stickerHappy,
	},
	{
		name: {
			'en-US': 'Tongue',
			'es-MX': 'Lengua',
		},
		img: tongue,
	},
	{
		name: {
			'en-US': 'Gift for Unzor',
			'es-MX': 'Regalo para Unzor',
		},
		img: unzor,
	},
	{
		name: {
			'en-US': 'Why did you kill me?',
			'es-MX': '¿Por qué me mataste?',
		},
		img: kyleKilled,
	},
	{
		name: {
			'en-US': 'Why?',
			'es-MX': '¿Por qué?',
		},
		img: why,
	},
] as ArtworkData[];
