/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2025  Edgar Lima (RobotoSkunk)
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


import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDictionary } from '@/components/providers/DictionaryProvider';
import cardModalStyle from '@/components/modals/CardModal/card.module.css';
import style from './style.module.css';

import artworks from '@/data/artworks';
import { roboto300 } from '@/utils/fonts';

import Newgrounds from '@/components/icons/social/Newgrounds';
import DeviantArt from '@/components/icons/social/DeviantArt';
import Instagram from '@/components/icons/social/Instagram';
import Gallery from '@/components/Gallery';


export default function GalleryContent({
	params,
}: {
	params: Promise<{ lang: Localizations }>
})
{
	const lang = use(params).lang;
	const dict = useDictionary();


	return (
		<main className={ style.main }>
			<h1>{ dict.pages.illustrations.title }</h1>
			<p className={ style.legend }>{ dict.pages.illustrations.description }</p>

			<section>
				<Gallery
					gallery={ artworks.map((data) =>
					({
						img: data.img,
						alt: data.name[lang],
					})) }

					content={ (openPicture) =>
					(
						artworks.map((data, index) => (
							<button
								key={ index }
								className={ cardModalStyle.card }
								onClick={() =>
								{
									openPicture(index)
								}}
							>
								<div
									className={
										[
											cardModalStyle.preview,
											roboto300.className,
										].join(' ')
									}
								>
									<Image
										src={ data.img }
										alt='' // Disabled due to redundancy
										sizes={ `${(data.img.width / data.img.height) * 350}px` }
										placeholder='blur'
										fill
									/>
									<div>
										<span>{ data.name[lang] }</span>
									</div>
								</div>
							</button>
						))
					) }
				/>
			</section>

			<section>
				<h2>{ dict.pages.illustrations['see-more'] }</h2>
				<div className='social-media'>
					<Link
						href='https://www.deviantart.com/robotoskunk'
						title='DeviantArt'
						target='_blank'
						rel='noreferrer noopener'
					>
						<DeviantArt/>
					</Link>
					<Link
						href='https://robotoskunk.newgrounds.com/art'
						title='Newgrounds'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Newgrounds/>
					</Link>
					<Link
						href='https://www.instagram.com/RobotoSkunk'
						title='Instagram'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Instagram/>
					</Link>
				</div>
			</section>
		</main>
	);
}
