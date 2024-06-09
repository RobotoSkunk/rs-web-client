/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import Newgrounds from '@/components/icons/social/Newgrounds';
import Instagram from '@/components/icons/social/Instagram';
import DeviantArt from '@/components/icons/social/DeviantArt';
import GitHub from '@/components/icons/social/GitHub';
import CardModal from '@/components/modals/CardModal';

import style from './page.module.css';

import artworks from '@/data/artworks';
import genesisBot from '@/assets/img/portfolio/development/genesis-bot/icon.webp';
import genesisBot1 from '@/assets/img/portfolio/development/genesis-bot/1.webp';
import { motion } from 'framer-motion';

import closeIcon from '@/assets/svg/symbols/close.svg';
import ImageModal from '@/components/modals/ImageModal';


export default function Page()
{
	const [ cardId, setCardId ] = useState(null as null|string);
	const [ imageId, setImageId ] = useState(null as null|string);

	return (
		<main className={ style.main }>
			<h1>Portfolio</h1>
			<p className={ style.legend }>
				A few examples of some of my favorite projects and artworks I've made since I can remember.
			</p>

			<section>
				<h2>Projects</h2>

				<div className={ style.gallery }>
					<CardModal
						id='example-project'

						name='Génesis Discord Bot'
						img={ genesisBot }

						currentId={ cardId }
						setCurrentId={ setCardId }
					>
						<div className={ style.project }>
							<motion.div
								className={ style.about }
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.25, delay: 0.15 }}
							>
								<h2>Génesis Discord Bot</h2>
								<Image
									src={ genesisBot }
									alt='Génesis Discord Bot icon'
									width={ 200 }
								/>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id finibus quam.
									Mauris dapibus neque tortor, sit amet venenatis est placerat ac. In quis faucibus
									erat, a sagittis arcu. Curabitur eu ultricies arcu. In id massa vehicula, vulputate
									lorem quis, semper justo. Donec mollis consectetur aliquet. Curabitur sit amet est
									lorem. 
								</p>
							</motion.div>
							<motion.div
								className={ style.screenshots }
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.25, delay: 0.35 }}
							>
								<motion.div
									layoutId={ genesisBot1.src }
								>
									<ImageModal
										src={ genesisBot1 }
										alt=''
										width={ 400 }

										id='test'

										currentId={ imageId }
										setCurrentId={ setImageId }
									/>
								</motion.div>
							</motion.div>
						</div>
					</CardModal>
				</div>
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
