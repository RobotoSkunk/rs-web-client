/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import { MetadataRoute } from 'next';


export default function robots(): MetadataRoute.Robots
{
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: 'https://robotoskunk.com/sitemap.xml',
	};
}
