/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import { StaticImageData } from 'next/image';

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


interface ArtworkData {
	name: string,
	img: StaticImageData,
}


export default [
	{
		name: "Commission for @Serpent_Boi",
		img: comm_SerpentBoi,
	},
	{
		name: "Commission for @Miniponies25",
		img: comm_Miniponies_1,
	},
	{
		name: "Commission for @Miniponies25",
		img: comm_Miniponies_2,
	},
	{
		name: "Commission for @_Terry03",
		img: comm_terry,
	},
	{
		name: "Commission for @zarckets",
		img: comm_zarckets,
	},
	{
		name: 'Eli-Copter',
		img: eliCopter,
	},
	{
		name: 'Happy Skunk',
		img: happySkunk,
	},
	{
		name: 'SILENCE!!!',
		img: silence,
	},
	{
		name: "Gift for Sr. Pelo's Birthday",
		img: peloBirthday,
	},
	{
		name: "Alex's Sticker",
		img: sticker,
	},
	{
		name: "Alex's Happy Sticker",
		img: stickerHappy,
	},
	{
		name: "Tongue",
		img: tongue,
	},
	{
		name: "Gitf for Unzor",
		img: unzor,
	},
	{
		name: "Why did you kill me?",
		img: kyleKilled,
	},
	{
		name: "Why?",
		img: why,
	},
] as ArtworkData[];
