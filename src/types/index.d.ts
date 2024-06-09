/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import { StaticImageData } from 'next/image';


declare global
{
	interface ProjectData
	{
		name: string,
		description: string,
		icon: StaticImageData,
		links: {
			label: string,
			url: string,
		}[],
		screenshots: {
			src: StaticImageData,
			alt: string,
		}[],
	}

	interface ArtworkData
	{
		name: string,
		img: StaticImageData,
	}
}


export { };
