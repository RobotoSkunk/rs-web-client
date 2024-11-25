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

import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';

import metadataBuilder from '@/utils/metadata-builder';


import style from './page.module.css';
import ExternalLink from '@/components/icons/ExternalLink';

import acknowledgements from '@/data/acknowledgements';


const robotoMono = Roboto_Mono({ weight: '400', subsets: [ 'latin' ], display: 'swap' });


export const metadata = metadataBuilder('Open source');

export default function Page()
{
	return (
		<main className={ style.main }>
			<h1>Open Source</h1>
			<p>This website is completely open source under the AGPLv3 license and its code can be found on GitHub.</p>
			<Link
				href='https://github.com/RobotoSkunk/robotoskunk.com'
				className='button'
				target='_blank'
				rel='noreferrer noopener'
			>
				GitHub Repository
				<ExternalLink/>
			</Link>

			<section>
				<h2>Acknowledgements</h2>
				<p>Thank you to the following open source projects that made this website possible!</p>

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
