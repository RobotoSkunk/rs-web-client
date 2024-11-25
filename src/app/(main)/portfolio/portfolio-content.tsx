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

import CardModal from '@/components/modals/CardModal';

import style from './page.module.css';

import projects from '@/data/projects';
import artworks from '@/data/artworks';
import ProjectArticle from '@/components/articles/ProjectArticle';


function toggleScrolling(toggle: boolean)
{
	document.querySelector('html')?.classList.toggle('no-scroll', toggle);
}

export default function PortfolioContent()
{
	const [ cardId, setCardId ] = useState(null as null|string);
	const [ imageId, setImageId ] = useState(null as null|string);

	useEffect(() =>
		toggleScrolling(cardId != null || imageId != null)
	);

	return (<>
		<section>
			<h2>Projects</h2>

			{<div className={ style.gallery }>
				{projects.map((data, index) =>
				(
					<ProjectArticle
						key={ index }
						id={ index }

						name={ data.name }
						description={ data.description }
						icon={ data.icon }
						screenshots={ data.screenshots }
						links={ data.links }

						currentId={ imageId }
						setCurrentId={ setImageId }
					/>
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
	</>);
}
