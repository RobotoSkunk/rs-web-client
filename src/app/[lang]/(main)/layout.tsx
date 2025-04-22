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

import { headers } from 'next/headers';

import { execSync } from 'child_process';

import './globals.css';
import { roboto400 } from '@/utils/fonts';

import Background from '@/components/Background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlexPhrase from '@/components/AlexPhrase';
import metadataBuilder from '@/utils/metadata-builder';
import { MotionConfig } from 'framer-motion';


export const metadata = metadataBuilder();


export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>)
{
	const _headers = await headers();
	const deviceType = _headers.get('X-Device-Type') ?? '';
	const canonical  = _headers.get('X-Canonical')   ?? '';
	const nonce      = _headers.get('X-Nonce')       ?? '';


	if (!process.env.COMMIT_SHA) {
		process.env.COMMIT_SHA = 'not_a_repo';

		try {
			// Not the best approach, but it works...
			process.env.COMMIT_SHA = execSync('git rev-parse HEAD').toString().trim();
		} catch (_) { }
	}

	return (
		<html lang='en' suppressHydrationWarning={ true }>
			<head>
				<link rel='me' href='https://mastodon.social/@RobotoSkunk'/>
				<link rel='me' href='https://wetdry.world/@RobotoSkunk'/>
				<link rel='canonical' href={ canonical }/>

				<meta name='commit-sha' content={ process.env.COMMIT_SHA }/>

				<noscript><meta http-equiv="refresh" content="0; url=/noscript"></meta></noscript>
			</head>

			<body
				className={ roboto400.className }
				device-type={ deviceType }
			>
				<Background/>
				<AlexPhrase/>

				<MotionConfig nonce={ nonce }>
					<div id='app'>
						<Header/>

						{ children }

						<Footer/>
					</div>
				</MotionConfig>
			</body>
		</html>
	);
}
