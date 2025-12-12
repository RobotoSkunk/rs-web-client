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

import ProjectArticle from '@/components/articles/ProjectArticle';

import LinkedIn from '@/components/icons/social/LinkedIn';
import GitHub from '@/components/icons/social/GitHub';
import Image from 'next/image';
import profilePicture from '@/assets/img/profile-picture.webp';
import ExternalLink from '@/components/icons/ExternalLink';


// function toggleScrolling(toggle: boolean)
// {
// 	document.querySelector('html')?.classList.toggle('no-scroll', toggle);
// }


export default function PortfolioContent({
	params,
}: {
	params: Promise<{ lang: Localizations }>
})
{
	const lang = use(params).lang;
	const dict = useDictionary();


	return (
		<main className={ style.main }>
			<h1>{ dict.pages.portfolio.h1 }</h1>

			<section className={ style.nutshell }>
				<div className={ style['who-i-am'] }>
					<div className={ style['picture-container'] }>
						<Image
							alt={ dict.pages.portfolio.about['img-alt'] }
							src={ profilePicture }
							width={ 200 }
							className={ style['profile-picture'] }
							draggable={ false }

							priority={ true }
							fetchPriority='high'
						/>
						<span>
							{ dict.pages.portfolio.about['img-span'] + ' ' }
							<Link
								href='https://x.com/SynieDraw/status/1699933375417528722'
								target='_blank'
								rel='noreferrer noopener'
							>
								@SynieDraw <ExternalLink/>
							</Link>
						</span>
					</div>
					<div className={ style.content }>
						<p dangerouslySetInnerHTML={{ __html: dict.pages.portfolio.about['content-p1'] }}></p>
						<p dangerouslySetInnerHTML={{ __html: dict.pages.portfolio.about['content-p2'] }}></p>
						<p dangerouslySetInnerHTML={{ __html: dict.pages.portfolio.about['content-p3'] }}></p>
						<p dangerouslySetInnerHTML={{ __html: dict.pages.portfolio.about['content-p4'] }}></p>
					</div>
				</div>
			</section>

			<section>
				<h2>{ dict.pages.portfolio.projects.title }</h2>
				<p className={ style.legend }>
					{ dict.pages.portfolio.projects.description }
				</p>

				{<div className={ style.gallery }>
					{projects.map((data, index) =>
					(
						<ProjectArticle
							key={ index }

							name={ data.name }
							description={ data.description }
							icon={ data.icon }
							screenshots={ data.screenshots }
							links={ data.links }

							lang={ lang }
						/>
					))}
				</div>}
			</section>

			<section>
				<h2>{ dict.pages.portfolio['see-more'] }</h2>
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
