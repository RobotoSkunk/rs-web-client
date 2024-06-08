/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */
'use client';

import Image from 'next/image';
import { Roboto_Condensed } from 'next/font/google';

import style from './page.module.css';

import exampleImage from '@/assets/img/portfolio/artworks/6.webp';



const roboto = Roboto_Condensed({ weight: '300', subsets: [ 'latin' ] });

export default function Page()
{
	const projects = [];

	for (var i = 0; i < 20; i++) {
		projects.push(
			<button className={ style.project } onClick={ () => alert('hi') }>
				<div className={ style.preview + ' ' + roboto.className }>
					<Image
						src={ exampleImage }
						alt='example'
						fill
					/>
					<div>
						<span>Example</span>
					</div>
				</div>
			</button>
		);
	}

	return (
		<main className={ style.main }>
			<h1>Portfolio</h1>
			<p>A few examples of the works I've done since I can remember.</p>

			<section>
				<h2>Projects</h2>

				<div className={ style.gallery }>
					{ projects }
				</div>
			</section>
		</main>
	);
}
