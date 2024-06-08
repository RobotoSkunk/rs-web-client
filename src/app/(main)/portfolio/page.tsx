/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */
'use client';

import style from './page.module.css';

import { useState } from 'react';
import ArticleModal from '@/components/ArticleModal';


import exampleImage1 from '@/assets/img/portfolio/artworks/silence.webp';
import exampleImage2 from '@/assets/img/portfolio/artworks/why.webp';
import exampleImage3 from '@/assets/img/portfolio/artworks/unzor.webp';



export default function Page()
{
	const [ currentId, setCurrentId ] = useState(null as null|string);

	return (
		<main className={ style.main }>
			<h1>Portfolio</h1>
			<p>A few examples of the works I've done since I can remember.</p>

			<section>
				<h2>Projects</h2>

				<div className={ style.gallery }>
					<ArticleModal
						id='1'
						name={ 'SILENCE!!!' }
						img={ exampleImage1 }
						currentId={ currentId }
						isImage={ true }
						setCurrentId={ setCurrentId }
					/>

					<ArticleModal
						id='2'
						img={ exampleImage2 }
						name={ 'Why?' }
						isImage={ true }
						currentId={ currentId }
						setCurrentId={ setCurrentId }
					/>

					<ArticleModal
						id='3'
						img={ exampleImage3 }
						name={ 'Gift for Unzor' }
						currentId={ currentId }
						isImage={ true }
						setCurrentId={ setCurrentId }
					/>
				</div>
			</section>
		</main>
	);
}
