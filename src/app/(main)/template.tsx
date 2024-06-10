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

'use client';

import { AnimatePresence, motion } from 'framer-motion';


export default function Template({
	children
}: {
	children: React.ReactNode
})
{
	return (
		// <AnimatePresence
		// 	initial={ false }
		// 	mode='wait'
		// >
			<motion.div
				initial={{ y: 40, opacity: 0 }}
				animate={{ y:  0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.75 }}
			>
				{ children }
			</motion.div>
		// </AnimatePresence>
	);
}
