/**
 * Resume Builder, un programa para generar currículums vitae.
 * Copyright (C) 2025  Edgar Lima (RobotoSkunk)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
**/

'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import FrozenRouter from '@/components/FrozenRouter';


export default function TransitionHandler({
	children,
}: {
	children: React.ReactNode,
})
{
	const key = usePathname();

	return (
		<AnimatePresence mode='popLayout'>
			<motion.div
				key={ key }

				initial={{ y: 40, opacity: 0 }}
				exit={{ y: 40, opacity: 0 }}

				animate={{ y:  0, opacity: 1 }}

				className='content'

				transition={{ ease: 'easeOut', duration: 0.75 }}
			>
				<FrozenRouter>{ children }</FrozenRouter>
			</motion.div>
		</AnimatePresence>
	);
}
