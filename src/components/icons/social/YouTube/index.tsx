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


export default function YouTube()
{
	return (
		<svg viewBox='0 0 242 170' className={
			[
				style.social,
				iconStyle.youtube,
			].join(' ')
		}>
			<rect className={ style.clear } x='55' y='30' width='120' height='110'/>
			<path className={ style.white } d='M235.08 26.42c-2.76,-10.4 -10.9,-18.59 -21.23,-21.37 -18.72,-5.05 -93.81,-5.05 -93.81,-5.05 0,0 -75.08,0 -93.81,5.05 -10.33,2.78 -18.47,10.97 -21.23,21.37 -5.02,18.85 -5.02,58.17 -5.02,58.17 0,0 0,39.32 5.02,58.17 2.76,10.4 10.9,18.59 21.23,21.37 18.72,5.05 93.81,5.05 93.81,5.05 0,0 75.08,0 93.81,-5.05 10.33,-2.78 18.47,-10.97 21.23,-21.37 5.02,-18.85 5.02,-58.17 5.02,-58.17 0,0 0,-39.32 -5.02,-58.17zm-139.59 93.86l0 0 0 -71.4 62.75 35.7 -62.75 35.7z'/>
		</svg>
	);
}
