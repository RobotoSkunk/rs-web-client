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
import iconStyle from './icon.module.css';


export default function Messenger()
{
	return (
		<svg viewBox='0 0 850 850' className={
			[
				style.social,
				iconStyle.messenger,
			].join(' ')
		}>
			<circle className={ style.clear } cx='400' cy='400' r='300' />
			<path className={ style.white } d='M400,0C174.67,0,0,165.06,0,388,0,504.62,47.79,605.38,125.62,675a31.92,31.92,0,0,1,10.75,22.8L138.55,769a32,32,0,0,0,44.9,28.29l79.4-35a31.92,31.92,0,0,1,21.36-1.56A436.36,436.36,0,0,0,400,776c225.33,0,400-165,400-388S625.33,0,400,0ZM640.2,298.53,522.7,485a60,60,0,0,1-86.76,16l-93.45-70.1a24,24,0,0,0-28.91.09L187.36,526.74c-16.84,12.78-38.83-7.38-27.56-25.27L277.3,315.05a60,60,0,0,1,86.76-16l93.45,70.09a24,24,0,0,0,28.91-.09l126.22-95.78C629.48,260.48,651.47,280.64,640.2,298.53Z'/>
		</svg>
	);
}
