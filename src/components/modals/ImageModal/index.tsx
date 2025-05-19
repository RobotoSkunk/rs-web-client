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

'use client';

import { useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import modalStyle from '../modal.module.css';
import style from './image.module.css';

import { AnimatePresence, motion } from 'framer-motion';

import closeIcon from '@/assets/svg/symbols/close.svg';



export default function ImageModal({
	src,
	alt,
	width,
	height,
	className,

	id,
	currentId,
	setCurrentId,
}: Readonly<{
	src: StaticImageData,
	alt: string,
	width?: number | `${number}`,
	height?: number | `${number}`,
	className?: string,

	id: string,
	currentId: null|string,
	setCurrentId(id: null|string): void,
}>)
{
	const [ maximize, setMaximize ] = useState(false);

	return (
		<>
			<motion.button
				layoutId={ id }
				className={
					[
						style.image,
						className,
					].join(' ')
				}
				onClick={() =>
				{
					setMaximize(false);
					setCurrentId(id);
				}}
			>
				<Image
					src={ src }
					alt={ alt }
					width={ width }
					height={ height }
				/>
			</motion.button>


			<AnimatePresence mode='wait'>
				{currentId === id && (
					<motion.div
						className={
							[
								modalStyle.modal,
								style.picture,
							].join(' ')
						}

						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}

						transition={{ duration: 0.4 }}
					>
						<button onClick={ () => setCurrentId(null) } aria-label='Close'>
							<Image
								src={ closeIcon }
								alt='Close'
								width={ 12 }
							/>
						</button>
						<motion.div
							className={
								[
									style.container,
									maximize ? style.maximized : '',
								].join(' ')
							}
							layoutId={ currentId }
						>
							<Image
								src={ src }
								alt={ alt }
								unoptimized={ true }
								onClick={ () => setMaximize(!maximize) }
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
