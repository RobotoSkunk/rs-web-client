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


export default function Twitter()
{
	return (
		<svg viewBox='0 0 261.4 215' className={
			[
				style.social,
				iconStyle.twitter,
			].join(' ')
		}>
			<path className={ style.white } d='M82.11 212.55c98.64,0 152.61,-81.8 152.61,-152.61 0,-2.3 0,-4.6 -0.1,-6.9 10.46,-7.53 19.56,-17.05 26.78,-27.82 -9.62,4.29 -19.98,7.11 -30.86,8.47 11.09,-6.59 19.56,-17.15 23.64,-29.71 -10.36,6.17 -21.86,10.57 -34.1,12.97 -9.83,-10.46 -23.74,-16.95 -39.12,-16.95 -29.6,0 -53.66,24.06 -53.66,53.66 0,4.18 0.52,8.26 1.36,12.24 -44.56,-2.2 -84.1,-23.64 -110.56,-56.07 -4.6,7.95 -7.22,17.15 -7.22,26.99 0,18.62 9.52,35.04 23.85,44.66 -8.79,-0.31 -17.05,-2.72 -24.27,-6.69 0,0.21 0,0.42 0,0.73 0,25.94 18.51,47.7 42.99,52.61 -4.5,1.25 -9.21,1.88 -14.12,1.88 -3.45,0 -6.8,-0.31 -10.04,-0.94 6.8,21.34 26.67,36.82 50.1,37.24 -18.41,14.43 -41.53,23.01 -66.63,23.01 -4.29,0 -8.58,-0.21 -12.76,-0.73 23.64,15.06 51.88,23.95 82.11,23.95z'/>
		</svg>
	);
}
