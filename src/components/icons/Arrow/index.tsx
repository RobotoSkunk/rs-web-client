/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2025  Edgar Lima (RobotoSkunk)
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

import style from './arrow.module.css';


export default function ArrowIcon({
	flip,
}: {
	flip?: boolean,
})
{
	return (
		<svg
			className={ style['arrow-icon'] }
			style={{
				transform: flip ? 'scaleX(-1)' : ''
			}}

			viewBox='0 0 5.0300003 9.2653866'
		>
			<path d='M 4.6326935,8.868511 0.39687636,4.6326933 4.6326945,0.396875'/>
		</svg>
	);
}
