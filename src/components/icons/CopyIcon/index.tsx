/*
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
 */

import style from './copy.module.css';


export default function CopyIcon()
{
	return (
		<svg className={ style['copy-icon'] } viewBox='0 0 43.48 54.35'>
			<path d='M7.24 10.87l3.63 0 0 -3.63c0,-3.99 3.26,-7.24 7.24,-7.24l18.12 0c3.99,0 7.24,3.26 7.24,7.24l0 28.99c0,3.99 -3.26,7.24 -7.24,7.24l-3.63 0 0 3.63c0,3.99 -3.26,7.24 -7.24,7.24l-18.12 0c-3.99,0 -7.24,-3.26 -7.24,-7.24l0 -28.99c0,-3.99 3.26,-7.24 7.24,-7.24zm9.06 0l9.06 0c3.99,0 7.24,3.26 7.24,7.24l0 19.93 2.33 0c1.71,0 3.1,-1.4 3.1,-3.1l0 -26.4c0,-1.71 -1.4,-3.1 -3.1,-3.1l-15.53 0c-1.71,0 -3.11,1.4 -3.11,3.1l0 2.33zm-7.77 5.44l15.53 0c1.71,0 3.1,1.4 3.1,3.1l0 26.4c0,1.71 -1.4,3.1 -3.1,3.1l-15.53 0c-1.71,0 -3.11,-1.4 -3.11,-3.1l0 -26.4c0,-1.71 1.4,-3.1 3.11,-3.1z'/>
		</svg>
	);
}
