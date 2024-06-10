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

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import Background from '@/components/Background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlexPhrase from '@/components/AlexPhrase';


const roboto = Roboto({ weight: '400', subsets: [ 'latin' ], display: 'swap' });


const commonMetadata = {
	title: 'RobotoSkunk',
	description: "I'm a Full Stack developer who makes commissioned artwork, games, websites, bots and microservices.",
	metaIcon: 'https://robotoskunk.com/assets/img/meta-icon.webp',
};

export const metadata: Metadata = {
	title: commonMetadata.title,
	description: commonMetadata.description,
	authors: {
		name: 'RobotoSkunk (Edgar Lima)',
	},
	applicationName: commonMetadata.title,
	keywords: [
		'full stack',
		'servers',
		'linux',
		'microservices',
		'games',
		'artworks',
		'websites',
	],
	twitter: {
		card: 'summary_large_image',
		creator: '@RobotoSkunk',
		title: commonMetadata.title,
		description: commonMetadata.description,
		images: {
			url: commonMetadata.metaIcon,
		},
	},
	openGraph: {
		type: 'website',
		siteName: commonMetadata.title,
		title: commonMetadata.title,
		description: commonMetadata.description,
		images: {
			url: commonMetadata.metaIcon,
		},
	},
};



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>)
{
	return (
		<html lang='en'>
			<head>
				<noscript><meta http-equiv="refresh" content="0; url=/noscript"></meta></noscript>
			</head>

			<body className={ roboto.className }>
				<Background/>
				<AlexPhrase/>

				<div id='app'>
					<Header/>

					{ children }

					<Footer/>
				</div>
			</body>
		</html>
	);
}
