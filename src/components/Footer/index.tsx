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

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Roboto } from 'next/font/google';
import { motion } from 'framer-motion';
import ExternalLink from '../icons/ExternalLink';

const roboto = Roboto({ weight: '300', subsets: [ 'latin' ], display: 'swap' });


export default function Footer()
{
	const [ commitSha, setCommitSha ] = useState('not_a_repo');

	const year = new Date().getFullYear();


	useEffect(() =>
	{
		const metaTag = document.querySelector('[name="commit-sha"]')?.getAttribute('content');

		setCommitSha(metaTag ?? 'not_a_repo');
	}, []);


	return (
		<motion.footer
			className={roboto.className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<span>
				© Copyright {year} RobotoSkunk. All Rights Reserved.
			</span>
			<span>
				Built from { ' ' }
				<Link
					href={ `https://github.com/RobotoSkunk/rs-web-client/tree/${commitSha}` }
					target='_blank'
					rel='noreferrer noopener'
				>
					{ commitSha.slice(0, 7) }<ExternalLink/>
				</Link>
			</span>
			<span>
				{/* <Link href='/privacy'>Privacy Policy</Link>
				{ " • " }
				<Link href='/terms'>Terms of Use</Link>
				{ " • " } */}
				<Link href='/open-source'>Open Source</Link>
			</span>
		</motion.footer>
	);
}
