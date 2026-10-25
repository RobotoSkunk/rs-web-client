/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2026  Edgar Lima (RobotoSkunk)
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

import {
	useEffect,
	useState,
} from 'react';

import {
	motion,
} from 'motion/react';

import type {
	Route,
} from './+types/index';

import Markdown from 'react-markdown';

import ExternalLink from '@/components/icons/ExternalLink';
import style from './page.module.css';

type Size = {
	x: number;
	y: number;
};

type ProjectData = {
	name: string;
	description: string;
	icon: {
		filename: string;
		size: Size;
	};
	pictures: {
		picture: {
			filename: string;
			size: Size;
		};
		thumbnail: {
			filename: string;
			size: Size;
		};
		alt: string;
	}[];
};

function Project({
	index,
	data,
}: {
	index: number;
	data: ProjectData;
})
{
	const [ galleryOpen, setGalleryOpen ] = useState(false);

	return (
		<motion.div
			className={ style.project }

			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.1 + 0.1 * index }}
		>
			<p className={ style.name }>
				<img
					src={ `/api/assets/${data.icon.filename}` }
					width={ data.icon.size.x }
					height={ data.icon.size.y }
				/>
				<span>
					{ data.name }
				</span>
			</p>
			<div className={ style.body }>
				<div className={ style.description }>
					<Markdown
						components={{
							a(props) {
								const { node, target, rel, children, ...rest } = props;
								return (
									<a target='_blank' rel='noreferrer noopener' { ...rest }>
										{ children }
										{ typeof children === 'string' && !children.startsWith('/') && <ExternalLink/> }
									</a>
								);
							},
						}}
					>
						{ data.description }
					</Markdown>
				</div>
				<motion.div
					className={ style.pictures }
					initial={{ height: 250 }}
					animate={{ height: galleryOpen ? 'auto' : 250 }}

					transition={{
						type: 'spring',
						stiffness: 140,
						damping: 24,
						duration: 0.32,
					}}
				>
					{ data.pictures.map((p, i) =>
					(
						<motion.button
							key={ i }
							className={ style.picture }

							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 + 0.2 * index + 0.1 * i }}
						>
							<img
								key={ i }
								src={ `/api/assets/${p.thumbnail.filename}` }
								width={ p.thumbnail.size.x }
								height={ p.thumbnail.size.y }
							/>
							<span className={ style.alt }>
								{ p.alt }
							</span>
						</motion.button>
					)) }
				</motion.div>
				<button
					className={ style.toggle }
					onClick={ () => setGalleryOpen(!galleryOpen) }
				>
					<svg width={ 50 } height={ 30 } viewBox='0 0 50 30' className={ galleryOpen ? style.open : '' }>
						<motion.line
							x1={ 5 }
							y1={ 5 }
							x2={ 25 }
							y2={ 25 }
							strokeWidth={ 1 }
							stroke='var(--foreground)'
							shapeRendering='geometricPrecision'
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 30,
							}}

							animate={{
								rotate: galleryOpen ? 90 : 0,
							}}
						/>
						<motion.line
							x1={ 45 }
							y1={ 5 }
							x2={ 25 }
							y2={ 25 }
							strokeWidth={ 1 }
							stroke='var(--foreground)'
							shapeRendering='geometricPrecision'
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 30,
							}}

							animate={{
								rotate: galleryOpen ? -90 : 0,
							}}
						/>
					</svg>
				</button>
			</div>
		</motion.div>
	);
}

export async function loader({ params }: Route.LoaderArgs)
{
	const response = await fetch(`${process.env.VITE_INTERNAL_API}/projects/${params.lang}`);
	const json = await response.json() as ProjectData[];

	return json;
}

export default function Page({ loaderData }: Route.ComponentProps)
{
	const projects = loaderData;

	return (<>
		<title>Portfolio</title>
		<meta name='description' content={ `A list of some of the projects I've worked on.` }/>

		<h1>Portfolio</h1>
		<p>A list of some of the projects I've worked on.</p>

		<div className={ style.list }>
			{ projects.map((project, i) => (
				<Project
					key={ i }
					index={ i }
					data={ project }
				/>
			)) }
		</div>
	</>);
}
