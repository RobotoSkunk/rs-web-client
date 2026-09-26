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

export default function Page({ params }: Route.LoaderArgs)
{
	const [ groups, setGroups ] = useState<IllustrationGroups>([]);

	useEffect(() =>
	{
		let stop = false;

		(async () =>
		{
			// await wait(2000);

			const response = await fetch(`/api/illustrations/${params.lang}`);
			const illustrations = await response.json() as Illustration[];

			if (!stop) {
				const result: IllustrationGroups = [];

				for (const data of illustrations) {
					const year = Number.parseInt(data.created_at.split('-')[0]!);
					let index = result.findIndex(group => group.year === year);

					if (index < 0) {
						index = result.push({ year, data: [] }) - 1;
					}

					result[index].data.push(data);
				}

				setGroups(result);
			}
		})();

		return () =>
		{
			stop = true;
		};
	}, [ ]);

	return (<>
		<title>Illustrations</title>
		<meta name='description' content={ `A collection of my favorite illustrations.` }/>

		<h1>Illustrations</h1>
		<p>A collection of my favorite illustrations.</p>
		{ groups.length === 0 &&
			<div className={ style.loader }>
				{ [... new Array(4)].map((_, i) =>
				(
					<section key={ i }>
						<div className={ style['year-loading'] }>
							<LoadingBar/>
						</div>
						<div className={ style['cards-container'] }>
							{ [... new Array(4)].map((_, j) =>
							{
								let delta = Math.floor(Math.abs(Math.tan(120 * (j + i + 3))) * 200);

								if (delta > 200) {
									delta = 200;
								}

								return (
									<div
										key={ `${i}-${j}` }
										className={ style['card-background'] }
										style={{
											width: 350 + delta,
										}}
									>
										<LoadingBar/>
									</div>
								);
							}) }
						</div>
					</section>
				)) }
			</div>
		}
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
								name={ illustration.name ?? 'Untitled' }
								alt={ illustration.description ?? 'Not description provided for this picture.' }
								size={ size }
							/>
						);
					}) }
				</div>
			</section>
		)) }
	</>);
}
