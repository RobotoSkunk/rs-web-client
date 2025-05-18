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

import { Metadata } from 'next';
import { headers } from 'next/headers';

import { MotionConfig } from 'framer-motion';
import { execSync } from 'child_process';

import './globals.css';
import { roboto400 } from '@/utils/fonts';

import Background from '@/components/Background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlexPhrase from '@/components/AlexPhrase';

import { getDictionary, locales } from '@/app/dictionaries';
import DictionaryProvider from '@/components/providers/DictionaryProvider';
import appDirectory from '@/data/app-directory';
import TransitionHandler from './TransitionHandler';


export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: Localizations }>,
})
{
	const lang = (await params).lang;
	const dict = await getDictionary(lang);

	const defaultMetadata = {
		title: 'RobotoSkunk',
		description: dict.meta.description,
		metaIcon: 'https://robotoskunk.com/assets/img/meta-icon.webp',
	};


	const _headers = await headers();
	const canonical = _headers.get('X-Canonical') ?? '';
	const canonicalPathname = _headers.get('X-Canonical-Path') ?? '';
	const canonicalRoot     = _headers.get('X-Canonical-Root') ?? '';

	const languages: { [ key: string]: string } = {};

	for (const locale of locales) {
		languages[locale] = `${canonicalRoot}/${locale}${canonicalPathname}`;
	}

	
	const directoryData = appDirectory.filter((value) => value.path === canonicalPathname)[0];

	if (directoryData && directoryData.title) {
		defaultMetadata.title = `${directoryData.title[lang]} - RobotoSkunk`;
	}


	return {
		title: defaultMetadata.title,
		description: defaultMetadata.description,
		authors: {
			name: 'RobotoSkunk (Edgar Lima)',
		},
		applicationName: defaultMetadata.title,
		keywords: dict.meta.keywords,
		alternates: {
			canonical,
			languages,
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
};


export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: Localizations }>;
}>)
{
	const lang = (await params).lang;
	const dict = await getDictionary(lang);

	const _headers = await headers();
	const deviceType = _headers.get('X-Device-Type') ?? '';
	const nonce      = _headers.get('X-Nonce')       ?? '';


	if (!process.env.COMMIT_SHA) {
		process.env.COMMIT_SHA = 'not_a_repo';

		try {
			// Not the best approach, but it works...
			process.env.COMMIT_SHA = execSync('git rev-parse HEAD').toString().trim();
		} catch (_) { }
	}

	return (
		<html lang={ lang } suppressHydrationWarning={ true }>
			<head>
				<link rel='me' href='https://mastodon.social/@RobotoSkunk'/>
				<link rel='me' href='https://wetdry.world/@RobotoSkunk'/>

				<meta name='commit-sha' content={ process.env.COMMIT_SHA }/>

				<noscript><meta http-equiv="refresh" content={ `0; url=/${lang}/noscript` }></meta></noscript>
			</head>

			<body
				className={ roboto400.className }
				device-type={ deviceType }
			>
				<Background/>
				<AlexPhrase/>

				<MotionConfig nonce={ nonce }>
					<div id='app'>
						<DictionaryProvider dictionary={ dict }>
							<Header params={{ lang }}/>

							<TransitionHandler>
								{ children }
							</TransitionHandler>

							<Footer params={{ lang }}/>
						</DictionaryProvider>
					</div>
				</MotionConfig>
			</body>
		</html>
	);
}
