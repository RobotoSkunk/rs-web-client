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

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function SpanLink({
	children,
	href,
	delay,
}: Readonly<{
	children: React.ReactNode,
	href: string,
	delay: number,
}>)
{
	return (
		<motion.span
			initial={{
				y: -10,
				opacity: 0,
			}}

			animate={{
				y: 0,
				opacity: 1,
			}}

			transition={{
				duration: 0.5,
				delay,
			}}
		>
			<Link href={ href }>
				{ children }
			</Link>
		</motion.span>
	);
};
