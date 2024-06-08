/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

'use client';

import { useState } from 'react';

import style from './page.module.css';
import ArticleModal from '@/components/CardModal';

import artworks from '@/data/artworks';
import Link from 'next/link';
import Newgrounds from '@/components/icons/social/Newgrounds';
import Instagram from '@/components/icons/social/Instagram';
import DeviantArt from '@/components/icons/social/DeviantArt';


export default function Page()
{
	const [ currentId, setCurrentId ] = useState(null as null|string);

	return (
		<main className={ style.main }>
			<h1>Portfolio</h1>
			<p className={ style.legend }>
				A few examples of some of my favorite projects and artworks I've made since I can remember.
			</p>

			<section>
				<h2>Projects</h2>

				<div className={ style.gallery }>
					
				</div>
			</section>

			<section>
				<h2>Artworks</h2>
				<p>A collection of my favorite artworks and commissions I made.</p>
				<h3>Want to see more?</h3>
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
				</div>

				<div className={ style.gallery }>
					{artworks.map((data, index) => (
						<ArticleModal
							id={ `artwork-${index}` }
							key={ index }

							name={ data.name }
							img={ data.img }

							currentId={ currentId }
							isImage={ true }
							setCurrentId={ setCurrentId }
						/>
					))}			
				</div>
			</section>
		</main>
	);
}
