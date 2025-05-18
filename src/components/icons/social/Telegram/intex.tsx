/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2024 Edgar Lima (RobotoSkunk)
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


export default function Telegram()
{
	return (
		<svg viewBox='0 0 512 512' className={
			[
				style.social,
				iconStyle.telegram,
			].join(' ')
		}>
			<circle className={ style.clear } cx='256' cy='256' r='200' />
			<path className={ style.white } d='M256,0C114.62,0,0,114.62,0,256S114.62,512,256,512,512,397.38,512,256,397.38,0,256,0ZM374.66,174.1c-3.85,40.48-20.52,138.71-29,184-3.59,19.19-10.66,25.62-17.5,26.25-14.86,1.37-26.15-9.83-40.55-19.27-22.53-14.77-35.26-24-57.13-38.37C205.2,310.1,221.59,301,236,286c3.77-3.92,69.27-63.5,70.54-68.9.16-.68.31-3.2-1.19-4.53s-3.71-.87-5.3-.51q-3.39.76-108,71.37Q176.73,294,164.29,293.68c-9.14-.2-26.72-5.17-39.79-9.42-16-5.21-28.77-8-27.66-16.82q.85-6.92,19-14.14Q227.83,204.52,265.17,189c71.1-29.57,85.87-34.71,95.5-34.88,2.12,0,6.85.49,9.92,3a10.77,10.77,0,0,1,3.64,6.93A45.08,45.08,0,0,1,374.66,174.1Z'></path>
		</svg>
	);
}
