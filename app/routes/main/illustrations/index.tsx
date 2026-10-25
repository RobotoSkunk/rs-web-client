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
} from '../../../+types/root';

import style from './page.module.css';
import getLanguage from '@/data/languages';


type Size = {
	x: number;
	y: number;
};

type Illustration = {
	name: string | null;
	description: string | null;
	created_at: string;
	picture_filename: string;
	picture_small_filename: string;
	picture_size: Size;
	picture_small_size: Size;
};

type IllustrationGroups = {
	year: number;
	data: Illustration[];
}[];

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function LoadingBar()
{
	return (
		<motion.div
			className={ style.bar }

			animate={{
				x: [
					-300,
					620,
				],
				transition: {
					repeat: Infinity,
					repeatType: 'loop',
					repeatDelay: 0.4,
					ease: 'easeInOut',
					duration: 0.8,
				}
			}}
		/>
	);
}

function Card({
	size,
	name,
	alt,
	src,
	index,
}: {
	size: { x: number; y: number; };
	name: string;
	alt: string;
	src: string;
	index: number;
})
{
	const [ loaded, setLoaded ] = useState(false);

	return (
		<motion.button
			className={ style.card }

			aria-label={ `Open picture "${name}"` }

			style={{
				width: size.x,
				height: size.y,
			}}

			initial={{
				opacity: 0,
				y: 30,
			}}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					delay: 0.1 + 0.1 * index,
				},
			}}
		>
			{ !loaded &&
				<div className={ style.loader }>
					<div className={ style['card-background'] }/>
				</div>
			}
			<img
				src={ src }
				width={ size.x }
				height={ size.y }
				alt={ alt }

				onLoad={ (ev) => setLoaded(ev.currentTarget.complete) }
			/>
			{ !loaded &&
				<div className={ style.loader }>
					<LoadingBar/>
				</div>
			}
			<span>
				{ name }
			</span>
		</motion.button>
	);
}

export async function loader({ params }: Route.LoaderArgs)
{
	const response = await fetch(`${process.env.VITE_INTERNAL_API}/illustrations/${params.lang}`);
	const illustrations = await response.json() as Illustration[];

	const result: IllustrationGroups = [];

	for (const data of illustrations) {
		const year = Number.parseInt(data.created_at.split('-')[0]!);
		let index = result.findIndex(group => group.year === year);

		if (index < 0) {
			index = result.push({ year, data: [] }) - 1;
		}

		result[index].data.push(data);
	}

	return result;
}

export default function Page({ params, loaderData }: Route.ComponentProps)
{
	const groups: IllustrationGroups = loaderData!;
	const i18n = getLanguage(params.lang!).pages.illustrations;

	return (<>
		<title>{ i18n.meta.title }</title>
		<meta name='description' content={ i18n.meta.description }/>

		<h1>{ i18n.title }</h1>
		<p>{ i18n.content }</p>
		{ groups.map((group, i) =>
		(
			<section key={ i }>
				<h2 className={ style.year }>{ group.year }</h2>
				<div className={ style['cards-container'] }>
					{ group.data.map((illustration, j) =>
					{
						const size = illustration.picture_small_size;

						if (size.x > 550) {
							size.x = 550;
						}

						return (
							<Card
								key={ `${i}-${j}` }
								index={ j }
								src={ `/api/assets/${illustration.picture_small_filename}` }
								name={ illustration.name ?? i18n.card.untitled }
								alt={ illustration.description ?? i18n.card.description }
								size={ size }
							/>
						);
					}) }
				</div>
			</section>
		)) }
	</>);
}
