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

import { roboto300 } from '@/utils/fonts';

import { motion } from 'framer-motion';
import ExternalLink from '../icons/ExternalLink';
import { useDictionary } from '../providers/DictionaryProvider';

import Dropdown from '../Dropdown';


import mxFlag from '@/assets/svg/tweemoji/mx-flag.svg';
import usFlag from '@/assets/svg/tweemoji/us-flag.svg';


export default function Footer({
	params,
}: {
	params: { lang: string }
})
{
	const dict = useDictionary();

	const [ commitSha, setCommitSha ] = useState('not_a_repo');

	const year = new Date().getFullYear();
	const lang = params.lang;


	useEffect(() =>
	{
		const metaTag = document.querySelector('[name="commit-sha"]')?.getAttribute('content');

		setCommitSha(metaTag ?? 'not_a_repo');
	}, []);

	function changeLanguage(value: string)
	{
		if (value !== lang) {
			location.href = location.href.replace(lang, value);
		}
	};


	return (
		<motion.footer
			className={roboto300.className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<span>
				© Copyright {year} RobotoSkunk. { dict.layout.footer.rights }
			</span>
			<span>
				<Dropdown
					options={[
						{
							label: 'English (US)',
							icon: usFlag,
							value: 'en-US',
							default: lang === 'en-US',
						}, {
							label: 'Español (México)',
							icon: mxFlag,
							value: 'es-MX',
							default: lang === 'es-MX',
						},
					]}
					onValueChange={ changeLanguage }
				/>
			</span>
			<span>
				<Link href={ `/${lang}/legal` }>Legal</Link>
				{ ' • ' }
				<Link
					href={ `https://github.com/RobotoSkunk/rs-web-client/tree/${commitSha}` }
					target='_blank'
					rel='noreferrer noopener'
				>
					{ dict.layout.footer['built-from'] }{ ' ' }{ commitSha.slice(0, 7) }<ExternalLink/>
				</Link>
			</span>
		</motion.footer>
	);
}
