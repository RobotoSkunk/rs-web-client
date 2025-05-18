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

import style from './mail.module.css';


export default function MailIcon()
{
	return (
		<svg className={ style['mail-icon'] } viewBox='0 0 150 100'>
			<path d='M75,48,148.65,8.83A15,15,0,0,0,135,0H15A15,15,0,0,0,1.35,8.83Z'></path>
			<path d='M75,60.07,0,19V85a15,15,0,0,0,15,15H135a15,15,0,0,0,15-15V19Z'></path>
		</svg>
	);
}
