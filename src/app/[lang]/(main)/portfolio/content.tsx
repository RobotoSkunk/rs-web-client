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
import { use, useEffect, useState } from 'react';

import style from './page.module.css';
import { useDictionary } from '@/components/providers/DictionaryProvider';

import projects from '@/data/projects';
import artworks from '@/data/artworks';

import ProjectArticle from '@/components/articles/ProjectArticle';
import CardModal from '@/components/modals/CardModal';

import Newgrounds from '@/components/icons/social/Newgrounds';
import DeviantArt from '@/components/icons/social/DeviantArt';
import LinkedIn from '@/components/icons/social/LinkedIn';
import Instagram from '@/components/icons/social/Instagram';
import GitHub from '@/components/icons/social/GitHub';


function toggleScrolling(toggle: boolean)
{
	document.querySelector('html')?.classList.toggle('no-scroll', toggle);
}


export default function PortfolioContent({
	params,
}: {
	params: Promise<{ lang: Localizations }>
})
{
	const lang = use(params).lang;
	const dict = useDictionary();

	const [ cardId, setCardId ] = useState(null as null|string);
	const [ imageId, setImageId ] = useState(null as null|string);

	useEffect(() =>
		toggleScrolling(cardId != null || imageId != null)
	);


	return (
		<main className={ style.main }>
			<h1>{ dict.pages.portfolio.h1 }</h1>
			<p className={ style.legend }>
				{ dict.pages.portfolio.h1p }
			</p>

			<section>
				<h2>{ dict.pages.portfolio['h2-projects'] }</h2>

				{<div className={ style.gallery }>
					{projects.map((data, index) =>
					(
						<ProjectArticle
							key={ index }
							// id={ index }

							name={ data.name }
							description={ data.description }
							icon={ data.icon }
							screenshots={ data.screenshots }
							links={ data.links }

							// currentId={ imageId }
							// setCurrentId={ setImageId }

							lang={ lang }
						/>
					))}
				</div>}
			</section>

			<section>
				<h2>{ dict.pages.portfolio['h2-artworks'] }</h2>
				<p>{ dict.pages.portfolio['h2p-artworks'] }</p>

				<div className={ style.gallery }>
					{artworks.map((data, index) => (
						<CardModal
							id={ `artwork-${index}` }
							key={ index }

							name={ data.name[lang] }
							img={ data.img }

							currentId={ cardId }
							isImage={ true }
							setCurrentId={ setCardId }
						/>
					))}			
				</div>
			</section>

			<section>
				<h3>{ dict.pages.portfolio.h3 }</h3>
				<p>{ dict.pages.portfolio.h3p }</p>
				<div className='social-media'>
					<Link
						href='https://linkedin.com/in/RobotoSkunk'
						title='LinkedIn'
						target='_blank'
						rel='noreferrer noopener'
					>
						<LinkedIn/>
					</Link>
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
					<Link
						href='https://github.com/RobotoSkunk'
						title='GitHub'
						target='_blank'
						rel='noreferrer noopener'
					>
						<GitHub/>
					</Link>
				</div>
			</section>
		</main>
	);
}
