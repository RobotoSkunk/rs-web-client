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
	name: string;
	description: string;
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

export default function Page({ params }: Route.LoaderArgs)
{
	const [ groups, setGroups ] = useState<IllustrationGroups>([]);

	useEffect(() =>
	{
		let stop = false;

		(async () =>
		{
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
		<h1>Illustrations</h1>
		{ groups.map((group, i) =>
		(
			<section key={ i }>
				<h2 className={ style.year }>{ group.year }</h2>
				{ group.data.map((illustration, j) =>
				(
					<motion.button
						key={ `${i}-${j}` }
						className={ style.card }

						aria-label={ `Open picture "${illustration.name}"` }

						initial={{
							opacity: 0,
							y: 30,
						}}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.1 + 0.1 * j,
							},
						}}
					>
						<img
							src={ `/api/assets/${illustration.picture_small_filename}` }
							width={ illustration.picture_small_size.x }
							height={ illustration.picture_small_size.y }
							alt={ illustration.description ?? 'Not description provided for this picture.' }
						/>
						<span>
							{ illustration.name ?? 'Untitled' }
						</span>
					</motion.button>
				)) }
			</section>
		)) }
	</>);
}
