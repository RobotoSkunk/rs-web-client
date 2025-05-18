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

'use client';

import Link from 'next/link';

import { robotoMono } from '@/utils/fonts';

import style from './page.module.css';
import ExternalLink from '@/components/icons/ExternalLink';

import acknowledgements from '@/data/acknowledgements';
import { useDictionary } from '@/components/providers/DictionaryProvider';


export default function Page()
{
	const dict = useDictionary();

	return (
		<main className={ style.main }>
			<h1>{ dict.pages['open-source'].h1 }</h1>
			<p>{ dict.pages['open-source'].h1p }</p>
			<Link
				href='https://github.com/RobotoSkunk/robotoskunk.com'
				className='button'
				target='_blank'
				rel='noreferrer noopener'
			>
				{ dict.pages['open-source']['github-button'] }
				<ExternalLink/>
			</Link>

			<section>
				<h2>{ dict.pages['open-source'].h2 }</h2>
				<p>{ dict.pages['open-source'].h2p }</p>

				<div className={ style.licenses }>
					{acknowledgements.map((data, index) =>
					(
						<article className={ style.article } key={ index }>
							<h3>
								<Link
									href={ data.repo }
									target='_blank'
									rel='noreferrer noopener'
								>
									{ data.name } <ExternalLink/>
								</Link>
							</h3>
							<div className={ robotoMono.className }>
								{ data.license.replace(/\t/g, '') }
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
