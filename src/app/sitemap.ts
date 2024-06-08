/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import { MetadataRoute } from 'next';


export default function sitemap(): MetadataRoute.Sitemap
{
	return [
		{
			url: 'https://robotoskunk.com',
			lastModified: new Date(2024, 4, 28),
			priority: 1,
		},
		{
			url: 'https://robotoskunk.com/about',
			lastModified: new Date(2024, 4, 29),
			priority: 1,
		},
	];
}
