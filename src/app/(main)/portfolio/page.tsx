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

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import CardModal from '@/components/modals/CardModal';
import ImageModal from '@/components/modals/ImageModal';

import style from './page.module.css';

import Newgrounds from '@/components/icons/social/Newgrounds';
import Instagram from '@/components/icons/social/Instagram';
import DeviantArt from '@/components/icons/social/DeviantArt';
import GitHub from '@/components/icons/social/GitHub';

import projects from '@/data/projects';
import artworks from '@/data/artworks';
import ExternalLink from '@/components/icons/ExternalLink';
import LinkedIn from '@/components/icons/social/LinkedIn';
import DropdownArticle from '@/components/articles/DropdownArticle';



function toggleScrolling(toggle: boolean)
{
	document.querySelector('html')?.classList.toggle('no-scroll', toggle);
}


export default function Page()
{
	const [ cardId, setCardId ] = useState(null as null|string);
	const [ imageId, setImageId ] = useState(null as null|string);

	useEffect(() =>
		toggleScrolling(cardId != null || imageId != null)
	);

	return (
		<main className={ style.main }>
			<h1>Portfolio</h1>
			<p className={ style.legend }>
				A few examples of some of my favorite projects and artworks I've made since I can remember.
			</p>

			<section>
				<h2>Projects</h2>

				{<div className={ style.gallery }>
					{projects.map((data, index) =>
					(
						<DropdownArticle
							key={ index }
							name={ data.name }
							description={ data.description }
							img={ data.icon }
						>
							<motion.div
								className={ style.screenshots }
							>
								{data.screenshots.map((screenshot, i) =>
								(
									<motion.div
										key={ i }
										initial={{
											y: 15,
											opacity: 0,
										}}
										animate={{
											y: 0,
											opacity: 1,
										}}
										transition={{ duration: 0.25, delay: 0.3 + 0.075 * i }}
									>
										<ImageModal
											src={ screenshot.src }
											alt={ screenshot.alt }
											width={ 300 }
											className={ style.screenshot }

											id={ `project-${index}-${i}` }

											currentId={ imageId }
											setCurrentId={ setImageId }
										/>
										<span>
											{ screenshot.alt }
										</span>
									</motion.div>
								))}
							</motion.div>
						</DropdownArticle>
					))}
				</div>}
			</section>

			<section>
				<h2>Artworks</h2>
				<p>A collection of my favorite artworks and commissions I made.</p>

				<div className={ style.gallery }>
					{artworks.map((data, index) => (
						<CardModal
							id={ `artwork-${index}` }
							key={ index }

							name={ data.name }
							img={ data.img }

							currentId={ cardId }
							isImage={ true }
							setCurrentId={ setCardId }
						/>
					))}			
				</div>
			</section>

			<section>
				<h3>Want to see more?</h3>
				<p>Follow my projects!</p>
				<div className='social-media'>
					<Link
						href='https://linkedin.com/in/RobotoSkunk'
						title='LinkedIn'
						className='linkedin'
						target='_blank'
						rel='noreferrer noopener'
					>
						<LinkedIn/>
					</Link>
					<Link
						href='https://www.deviantart.com/robotogamer98'
						title='DeviantArt'
						className='deviantart'
						target='_blank'
						rel='noreferrer noopener'
					>
						<DeviantArt/>
					</Link>
					<Link
						href='https://robotoskunk.newgrounds.com/art'
						title='Newgrounds'
						className='newgrounds'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Newgrounds/>
					</Link>
					<Link
						href='https://www.instagram.com/RobotoSkunk'
						title='Instagram'
						className='generic'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Instagram/>
					</Link>
					<Link
						href='https://github.com/RobotoSkunk'
						title='GitHub'
						className='generic'
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
