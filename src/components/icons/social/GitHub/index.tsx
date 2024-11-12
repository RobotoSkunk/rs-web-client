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

import style from '../social.module.css';


export default function GitHub()
{
	return (
		<svg viewBox='0 0 321 316' className={ style.social }>
			<path className={ style.white } d='M160.14,0a160.16,160.16,0,0,0-50.61,312.11c8,1.47,10.93-3.47,10.93-7.72,0-3.8-.14-13.87-.22-27.23-44.55,9.67-53.95-21.47-53.95-21.47-7.28-18.5-17.78-23.43-17.78-23.43-14.54-9.93,1.1-9.73,1.1-9.73C65.68,223.66,74.14,239,74.14,239c14.29,24.47,37.49,17.41,46.61,13.31,1.46-10.35,5.59-17.41,10.17-21.41C95.36,226.89,58,213.15,58,151.78a61.89,61.89,0,0,1,16.49-43c-1.65-4-7.15-20.33,1.57-42.38,0,0,13.44-4.31,44,16.42a151.79,151.79,0,0,1,80.18,0c30.58-20.73,44-16.42,44-16.42,8.74,22,3.24,38.33,1.59,42.38,10.27,11.2,16.46,25.49,16.46,43,0,61.52-37.44,75.06-73.12,79,5.75,4.95,10.88,14.72,10.88,29.66,0,21.41-.2,38.68-.2,43.93,0,4.29,2.88,9.27,11,7.71A160.18,160.18,0,0,0,160.14,0Z'/>
		</svg>
	);
}
