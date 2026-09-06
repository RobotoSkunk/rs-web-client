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

import type {
	Route,
} from '../../../+types/root';

import {
	motion,
} from 'motion/react';

import style from './home.module.css';

const title = 'Edgar Lima';
const subtitle = 'Computer Systems Engineer';


export default function PageHome({ params }: Route.LoaderArgs)
{
	return (<>
		<div className={ style.identity }>
			<h1>
				{ title.split('').map((v, i) =>
				(
					<motion.span
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}

						transition={{
							delay: title.length * 0.06 - 0.06 * i,
						}}

						key={ `${i}-${v}` }
					>
						{ v }
					</motion.span>
				)) }
			</h1>
			<h2>
				{ subtitle.split('').map((v, i) =>
				(
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}

						transition={{
							delay: 0.03 * i,
						}}

						key={ `${i}-${v}` }
					>
						{ v }
					</motion.span>
				)) }
			</h2>
		</div>
	</>);
}
