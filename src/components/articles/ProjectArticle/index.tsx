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

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

import ImageModal from '@/components/modals/ImageModal';

import articlesStyle from '../article.module.css';
import style from './project.module.css';


export default function ProjectArticle({
	name,
	description,
	icon,
	screenshots,

	id,
	currentId,
	setCurrentId,
}: Readonly<{
	name: string,
	description: string,
	icon: StaticImageData,
	screenshots: {
		src: StaticImageData,
		alt: string,
	}[],

	id: number,
	currentId: null|string,
	setCurrentId(id: null|string): void,
}>)
{
	const articleRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const circleRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const contentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const [ open, setOpen ] = useState(false);


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
		if (!contentRef.current) {
			return;
		}
		if (!containerRef.current) {
			return;
		}

		const rect = contentRef.current?.getBoundingClientRect();

		containerRef.current.style.height = (toggle ? rect.height : 0) + 'px';
	}


	return (
		<article
			ref={ articleRef }
			className={
				[
					articlesStyle.article,
					style.dropdown,
					open ? style.open : '',
				].join(' ')
			}
		>
			<div className={ articlesStyle.background }>
				<div className={ articlesStyle.circle } ref={ circleRef }></div>
			</div>
			<div className={ articlesStyle.info }>
				<h3>{ name }</h3>
				<p>{ description }</p>
			</div>
			<button
				className={ style.button }
				onClick={ () => toggleArticle(!open) }
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
				<div className={ style.content } ref={ contentRef }>
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
								alt={ screenshot.alt }
								width={ 300 }
								className={ style.screenshot }

								id={ `project-${id}-${i}` }

								currentId={ currentId }
								setCurrentId={ setCurrentId }
							/>
							<span>
								{ screenshot.alt }
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</article>
	);
}
