/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */
'use client';

import Image from 'next/image';
import { Roboto_Condensed } from 'next/font/google';

import style from './page.module.css';

// import exampleImage from '@/assets/img/portfolio/artworks/silence.webp';
// import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ArticleModal from '@/components/ArticleModal';



const roboto = Roboto_Condensed({ weight: '300', subsets: [ 'latin' ] });

import exampleImage1 from '@/assets/img/portfolio/artworks/silence.webp';
import exampleImage2 from '@/assets/img/portfolio/artworks/why.webp';
import exampleImage3 from '@/assets/img/portfolio/artworks/unzor.webp';


// function openArticle(id: string, toggle: boolean)
// {
// 	document.getElementById(id)?.classList.toggle(style.open, toggle);
// 	console.log(id, toggle);
// }


export default function Page()
{
	const [ currentId, setCurrentId ] = useState(null as null|string);
	// const projects = [];

	// for (var i = 0; i < 20; i++) {
	// 	const id = `article-${i}`;

	// 	projects.push(
	// 		<motion.button layoutId={ id } className={ style.project } onClick={ () => setCurrentId(id) }>
	// 			<div className={ style.preview + ' ' + roboto.className }>
	// 				<Image
	// 					src={ exampleImage }
	// 					alt='example'
	// 					sizes='750px'
	// 					fill
	// 				/>
	// 				<div>
	// 					<span>Example</span>
	// 				</div>
	// 			</div>
	// 		</motion.button>
	// 	);
	// }

	return (
		<main className={ style.main }>
			<h1>Portfolio</h1>
			<p>A few examples of the works I've done since I can remember.</p>

			<section>
				<h2>Projects</h2>

				<div className={ style.gallery }>
					{/* { projects } */}

					<ArticleModal
						id='1'
						name={ 'Hi' }
						img={ exampleImage1 }
						currentId={ currentId }
						setCurrentId={ setCurrentId }
					>
						<Image
							src={ exampleImage1 }
							alt='test'
							height={ 400 }
						/>
					</ArticleModal>

					<ArticleModal
						id='2'
						img={ exampleImage2 }
						name={ 'Hi' }
						currentId={ currentId }
						setCurrentId={ setCurrentId }
					>
						<Image
							src={ exampleImage2 }
							alt='test'
							height={ 500 }
						/>
					</ArticleModal>

					<ArticleModal
						id='3'
						img={ exampleImage3 }
						name={ 'Hi' }
						currentId={ currentId }
						setCurrentId={ setCurrentId }
					>
						<Image
							src={ exampleImage3 }
							alt='test'
							height={ 500 }
						/>
					</ArticleModal>
				</div>
			</section>
		</main>
	);
}
