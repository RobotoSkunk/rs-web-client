/**
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
**/

import _style from './dotted.module.css';


// Inspired from https://dotted.framer.website

export default function DottedDiv({
	color,
	dotSize,
	dotGap,
	blurSize,
	gradientRotation,
	gradientSize,

	children,

	style,
	className,
}: {
	color: string;
	dotSize?: number;
	dotGap?: number;
	blurSize?: number;
	gradientRotation?: number;
	gradientSize?: number;

	children?: React.ReactNode,

	className?: string;
	style?: Omit<React.CSSProperties,
		'backdropFilter' |
		'backgroundColor' |
		'backgroundImage' |
		'backgroundSize' |
		'maskImage'
	>;
})
{
	return (
		<div
			className={ [ _style.dotted, className ].join(' ') }
			style={{
				backdropFilter: `blur(${ blurSize ?? 5 }px)`,
				backgroundImage: `radial-gradient(transparent ${ dotSize ?? 1 }px, ${ color } ${ dotSize ?? 1 }px)`,
				backgroundSize: `${ dotGap ?? 4 }px ${ dotGap ?? 4 }px`,
				maskImage: `linear-gradient(${ gradientRotation ?? 0 }deg, black calc(100% - ${ gradientSize ?? 10 }px), transparent)`,

				...style,
			}}
		>
			{ children }
		</div>
	);
}
