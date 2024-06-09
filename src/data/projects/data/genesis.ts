/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
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
	name: 'Génesis Discord Bot',
	icon,
	description: 'A commissioned Discord bot I made to sell roles, avatars and profile banners, provide a looting ' +
				 'system and a lot more for a private Discord server.',
	links: [
		{
			label: 'Discord Server',
			url: 'https://discord.gg/NX9s3GMADw',
		},
	],
	screenshots: [
		{
			src: screenshot_1,
			alt: 'Génesis commands list',
		},
		{
			src: screenshot_2,
			alt: 'Roles shop command',
		},
		{
			src: screenshot_3,
			alt: 'Profile command',
		},
		{
			src: screenshot_4,
			alt: 'Purchases command',
		},
		{
			src: screenshot_5,
			alt: 'Avatars shop command',
		},
		{
			src: screenshot_6,
			alt: 'Purchase avatar embed',
		},
		{
			src: screenshot_7,
			alt: 'Claim loot command',
		},
		{
			src: screenshot_8,
			alt: 'Leaderboard command',
		},
		{
			src: screenshot_9,
			alt: 'Inventory command',
		},
	],
} as ProjectData;
