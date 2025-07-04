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

import React, { RefObject, useEffect, useRef, useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ExternalLink from '@/components/icons/ExternalLink';
import ImageModal from '@/components/modals/ImageModal';

import articlesStyle from '../article.module.css';
import style from './project.module.css';
import { useDictionary } from '@/components/providers/DictionaryProvider';


export default function ProjectArticle({
	name,
	description,
	icon,
	screenshots,
	links,

	id,
	currentId,
	setCurrentId,

	lang,
}: Readonly<{
	name: LocalizationsData,
	description: LocalizationsData,
	icon: StaticImageData,
	screenshots: {
		src: StaticImageData,
		alt: LocalizationsData,
	}[],
	links: {
		label: LocalizationsData,
		url: string,
	}[],

	id: number,
	currentId: null|string,
	setCurrentId(id: null|string): void,

	lang: Localizations,
}>)
{
	const dict = useDictionary();

	const articleRef: RefObject<HTMLDivElement | null> = useRef(null);
	const circleRef: RefObject<HTMLDivElement | null> = useRef(null);

	const containerRef: RefObject<HTMLDivElement | null> = useRef(null);
	const screenshotsRef: RefObject<HTMLDivElement | null> = useRef(null);

	const [ open, setOpen ] = useState(false);

	const previewScreenshots = screenshots.filter((_, index) => index < 2).reverse();


	useEffect(() =>
	{
		document.addEventListener('mousemove', (ev) =>
		{
			if (!circleRef.current) {
				return;
			}
			if (!articleRef.current) {
				return;
			}

			const articleRect = articleRef.current.getBoundingClientRect();
			const circleRect = circleRef.current.getBoundingClientRect();

			const deltaX = ev.x - articleRect.x - circleRect.width / 2;
			const deltaY = ev.y - articleRect.y - circleRect.height / 2;

			circleRef.current.style.left = deltaX + 'px';
			circleRef.current.style.top = deltaY + 'px';
		});

		window.addEventListener('resize', () =>
		{
			if (!articleRef.current) {
				return;
			}

			setContentHeight(articleRef.current.classList.contains(style.open));
		});
	}, []);


	function toggleArticle(toggle: boolean)
	{
		setOpen(toggle);
		setContentHeight(toggle);
	}

	function setContentHeight(toggle: boolean)
	{
		if (!screenshotsRef.current) {
			return;
		}
		if (!containerRef.current) {
			return;
		}

		const rect = screenshotsRef.current?.getBoundingClientRect();

		containerRef.current.style.height = (toggle ? rect.height : 0) + 'px';
		containerRef.current.style.visibility = toggle ? 'visible' : 'hidden';
	}


	return (
		<article
			ref={ articleRef }
			className={
				[
					articlesStyle.article,
					style.project,
					open ? style.open : '',
				].join(' ')
			}
		>
			<div className={ articlesStyle.background }>
				<div className={ articlesStyle.circle } ref={ circleRef }></div>
			</div>
			<div className={ articlesStyle.info }>
				<div className={ style.head }>
					<Image
						src={ icon }
						alt={ '' }
						width={ 45 }
						height={ 45 }
						draggable={ false }

						priority={ true }
						fetchPriority='high'
					/>
					<h3>{ name[lang] }</h3>
				</div>
				<div className={ style.content }>
					<div className={ style.description }>
						<div className={ style.text }>
							{ description[lang] }
						</div>
						<div className={ style.links }>
							{links.map((link, i) =>
							(
								<Link
									key={ i }
									href={ link.url }
									className='button'
									target='_blank'
									rel='noreferrer noopener'
								>
									{ link.label[lang] } <ExternalLink/>
								</Link>
							))}
						</div>
					</div>
					<div className={ style.preview }>
						{previewScreenshots.map((screenshot, i) =>
						(
							<div className={ style.picture } key={ i }>
								<Image
									src={ screenshot.src }
									alt={ screenshot.alt[lang] }
									draggable={ false }
									sizes={ '(max-width: 600px) 200px, (max-width: 900px) 250px, 350px' }

									priority={ true }
									fetchPriority='high'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<button
				className={ style.button }
				onClick={ () => toggleArticle(!open) }
				aria-label={
					(open ? dict.pages.portfolio['toggle-hide'] : dict.pages.portfolio['toggle-show']) +
					` ${dict.pages.portfolio['toggle-label']} ${ name[lang] }`
				}
			>
				<div className={ style.arrow }>
					<div></div>
					<div></div>
				</div>
			</button>
			<div
				className={ style.container }
				ref={ containerRef }
				style={{
					height: 0,
				}}
			>
				<div className={ style.screenshots } ref={ screenshotsRef }>
					{screenshots.map((screenshot, i) =>
					(
						<motion.div
							key={ i }
							animate={{
								y: open ? 0 : 15,
								opacity: open ? 1 : 0,
							}}
							transition={{ duration: 0.25, delay: open ? 0.1 + 0.075 * i : 0.1 }}
						>
							<ImageModal
								src={ screenshot.src }
								alt={ screenshot.alt[lang] }
								width={ 300 }
								className={ style.screenshot }

								id={ `project-${id}-${i}` }

								currentId={ currentId }
								setCurrentId={ setCurrentId }
							/>
							<span>
								{ screenshot.alt[lang] }
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</article>
	);
}
