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

import style from './external.module.css';


export default function ExternalLink()
{
	return (
		<svg className={ style.icon } width={ 10 } viewBox="0 0 8.7312498 8.7312517">
			<path d="m 55.745084,10.847726 -7.9375,7.9375 m 7.9375,-7.9375 v 7.9375 m -7.9375,-7.9375 h 7.9375" />
		</svg>
	);
}
