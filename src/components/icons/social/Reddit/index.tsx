/**
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
**/

import style from '../social.module.css';
import iconStyle from './icon.module.css';


export default function Reddit()
{
	return (
		<svg viewBox='0 0 313 313' className={
			[
				style.social,
				iconStyle.reddit,
			].join(' ')
		}>
			<circle className={ style.clear } cx='156.5' cy='156.5' r='150'/>
			<path className={ style.white } d='M189.38,209.92c-6.91,7.1-22,9.53-32.69,9.53S131.11,217,124,209.92a4.23,4.23,0,0,0-6,6c11,11,32.31,11.95,38.66,11.95,6.17,0,27.46-.75,38.66-11.95a4.54,4.54,0,0,0,0-6A4.17,4.17,0,0,0,189.38,209.92Z'/>
			<path className={ style.white } d='M136.9,172.76A16.25,16.25,0,1,0,120.65,189,16.26,16.26,0,0,0,136.9,172.76Z'/>
			<path className={ style.white } d='M192.37,156.69a16.25,16.25,0,1,0,16.24,16.25A16.26,16.26,0,0,0,192.37,156.69Z'/>
			<path className={ style.white } d='M156.51,0A156.51,156.51,0,1,0,313,156.51,156.51,156.51,0,0,0,156.51,0Zm91,177.42a43.6,43.6,0,0,1,.56,6.91c0,35.3-40.9,63.69-91.33,63.69s-91.32-28.57-91.32-63.69a40.88,40.88,0,0,1,.56-6.91,22.75,22.75,0,0,1,9.34-43.51,23,23,0,0,1,15.87,6.35c15.88-11.39,37.73-18.68,62-19.42L164.72,66.3a3.63,3.63,0,0,1,1.69-2.61,3.94,3.94,0,0,1,3-.56l37.92,8A16.14,16.14,0,1,1,205.63,79l-34-7.28-10.45,48.93c23.9.93,45.38,8.22,61.07,19.42a22.86,22.86,0,1,1,25.21,37.35Z'/>
		</svg>
	);
}
