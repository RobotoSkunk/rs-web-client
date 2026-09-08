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
	useLayoutEffect,
	useState,
} from 'react';

import {
	motion,
} from 'motion/react';

import DottedImage from '@/components/DottedImage';

import txt404Image from '@/assets/svg/errors/404.svg';
import alex404Image from '@/assets/img/errors/alex-404.png';

import style from './error.module.css';


const phrases = [
	`Did you lose something?`,
	`Do you need a map?`,
	`Where are you going?`,
	`Is this the road to El Dorado?`,
	`The princess is in another castle!`,
	`Have you seen a white dog sleeping around here?`,
	`Nemo and you would get along great.`,
	`The page is a lie!`,
	`KRIS, WHERE THE F*** ARE WE??`,
];

export default function HomeError()
{
	const [ index, setIndex ] = useState(-1);
	const [ displayAlex, setDisplayAlex ] = useState(true);

	useLayoutEffect(() =>
	{
		setIndex(Math.floor(Math.random() * phrases.length));

		function onWindowResize()
		{
			setDisplayAlex(typeof window !== undefined && (window.innerWidth > 1200 || window.innerHeight > 1000));
		}
		onWindowResize();

		window.addEventListener('resize', onWindowResize);

		return () =>
		{
			window.removeEventListener('resize', onWindowResize);
		};
	}, [ ]);

	return (
		<>
			{ displayAlex &&
				<DottedImage
					src={ alex404Image }
					width={ 400 }
					height={ 369 }
					dotsColor={ '#ffffff' }
					dotsMargin={ 4 }
					dotsRadius={ 1.5 }
					disableStartup

					className={ style.alex }
				/>
			}

			<DottedImage
				src={ txt404Image }
				width={ 300 }
				height={ 120 }
				dotsColor={ '#ffffff' }
				dotsMargin={ 4 }
				dotsRadius={ 1.5 }
			/>
			<p className={ style.phrase }>
				{ phrases[index]?.split('').map((v, i) =>
				(
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}

						transition={{ delay: i * 0.03 }}

						key={ `${i}-${v}` }
					>
						{ v }
					</motion.span>
				)) }
			</p>
		</>
	);
}
