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

import { Metadata } from 'next';
import { headers } from 'next/headers';

import locales from '@/data/locales';


export default async function metadataBuilder(data: {
	subtitle?: string,
	description?: string,
} = { })
{
	const defaultMetadata = {
		title: 'RobotoSkunk',
		description: "I'm a Full Stack developer who makes commissioned artworks, websites, bots and microservices.",
		metaIcon: 'https://robotoskunk.com/assets/img/meta-icon.webp',
	};


	if (data.subtitle) {
		defaultMetadata.title = data.subtitle + ' - ' + defaultMetadata.title;
	}

	if (data.description) {
		defaultMetadata.description = data.description;
	}

	// const _headers = await headers();
	// const canonical  = _headers.get('X-Canonical')   ?? '';

	// const root = 'https://robotoskunk.com';
	// const languages: { [ key: string]: string } = {};

	// for (const locale of locales) {
	// 	languages[locale] = `${root}/${locale}`;
	// }


	return {
		title: defaultMetadata.title,
		description: defaultMetadata.description,
		authors: {
			name: 'RobotoSkunk (Edgar Lima)',
		},
		applicationName: defaultMetadata.title,
		keywords: [
			'full stack',
			'servers',
			'linux',
			'microservices',
			'artworks',
			'websites',
		],
		alternates: {
			// canonical,
			// languages,
		},
		twitter: {
			card: 'summary_large_image',
			creator: '@RobotoSkunk',
			title: defaultMetadata.title,
			description: defaultMetadata.description,
			images: {
				url: defaultMetadata.metaIcon,
			},
		},
		openGraph: {
			type: 'website',
			siteName: defaultMetadata.title,
			title: defaultMetadata.title,
			description: defaultMetadata.description,
			images: {
				url: defaultMetadata.metaIcon,
			},
		},
	} as Metadata;
}
