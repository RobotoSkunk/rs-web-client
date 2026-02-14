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


export default function GitLab()
{
	return (
		<svg viewBox='0 0 156 150' className={
			[
				style.social,
				iconStyle.gitlab,
			].join(' ')
		}>
			<path className={ style.white + ' ' + iconStyle['part-3'] } d="m 153.13315,59.37243 -0.2134,-0.55822 -21.19899,-55.3090803 c -0.4236,-1.08359 -1.18542,-1.99642 -2.17699,-2.62689002 -0.98837,-0.63373 -2.14749,-0.93253 -3.32305,-0.87014 -1.1689,0.0624 -2.29195,0.48925 -3.20809,1.21821002 -0.90957,0.73554 -1.56629,1.73047 -1.87493,2.85346 L 106.82443,47.88639 H 48.914782 L 34.601512,4.0797697 c -0.30864,-1.12299 -0.96536,-2.11791 -1.87493,-2.85346 -0.91614,-0.72895002 -2.03911,-1.15582002 -3.20809,-1.21821002 -1.17548,-0.0624 -2.33468,0.23641 -3.32297,0.87014 -0.99166,0.63047002 -1.75348,1.54330002 -2.17707,2.62689002 L 2.8195424,58.8175 l -0.21348,0.55493 c -6.28158,16.38521 -0.92929,34.90803 13.0589096,45.48782 0.0262,0.0164 0.0492,0.0361 0.0755,0.0558 l 0.18719,0.14119 32.29094,24.17392 15.97151,12.09024 9.71951,7.34871 c 2.34117,1.77316 5.57877,1.77316 7.92002,0 l 9.71943,-7.34871 15.968218,-12.09024 32.48142,-24.31511 c 0.0296,-0.023 0.0559,-0.0427 0.0854,-0.0657 13.97834,-10.57977 19.32735,-29.09604 13.04905,-45.47796 z"/>
			<path className={ style.white + ' ' + iconStyle['part-2'] } d="m 153.13315,59.37243 -0.2134,-0.55822 c -10.5174,2.16062 -20.20405,6.6099 -28.49844,12.81593 -0.1346,0.0985 -25.204968,19.05805 -46.551708,35.19699 15.84998,11.98517 29.647698,22.40405 29.647698,22.40405 l 32.48142,-24.31511 c 0.0296,-0.023 0.0559,-0.0427 0.0854,-0.0657 13.97834,-10.57977 19.32735,-29.09604 13.04905,-45.47796 z"/>
			<path className={ style.white + ' ' + iconStyle['part-1'] } d="m 48.218612,129.23117 15.97151,12.09024 9.71951,7.34871 c 2.34117,1.77316 5.57877,1.77316 7.92002,0 l 9.71943,-7.34871 15.968218,-12.09024 c 0,0 -13.797718,-10.41888 -29.647698,-22.40405 -15.85327,11.98517 -29.65099,22.40405 -29.65099,22.40405 z"/>
			<path className={ style.white + ' ' + iconStyle['part-2'] } d="M 31.314602,71.63014 C 23.023492,65.4274 13.340142,60.97483 2.8195324,58.8175 l -0.21348,0.55493 c -6.28158,16.38521 -0.92929,34.90803 13.0589096,45.48782 0.0262,0.0164 0.0492,0.0361 0.0755,0.0558 l 0.18719,0.14119 32.29094,24.17392 c 0,0 13.79772,-10.41888 29.65099,-22.40405 C 56.522852,90.68817 31.449272,71.72863 31.314592,71.63012 Z"/>
		</svg>
	);
}
