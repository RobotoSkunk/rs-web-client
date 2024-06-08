/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

'use client';

import { useState } from 'react';

import style from './page.module.css';
import ArticleModal from '@/components/CardModal';

import artworks from '@/data/artworks';


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
					
				</div>
			</section>

			<section>
				<h2>Artworks</h2>

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
