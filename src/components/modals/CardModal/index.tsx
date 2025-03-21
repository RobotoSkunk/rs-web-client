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

import Image from 'next/image';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

import modalStyle from '../modal.module.css';
import style from './card.module.css';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { roboto300 } from '@/utils/fonts';
import closeIcon from '@/assets/svg/symbols/close.svg';



export default function CardModal({
	children,
	name,
	id,
	img,
	isImage = false,
	currentId,
	setCurrentId,
}: Readonly<{
	children?: React.ReactNode,
	name: string,
	id: string,
	img: StaticImageData,
	isImage?: boolean,
	currentId: null|string,
	setCurrentId(id: null|string): void,
}>)
{
	const [ maximize, setMaximize ] = useState(false);

	return (
		<>
			<motion.button
				layoutId={ id }
				className={ style.card }
				onClick={() =>
				{
					setCurrentId(id);
					setMaximize(false)
				}}
			>
				<div
					className={
						[
							style.preview,
							roboto300.className,
						].join(' ')
					}
				>
					<Image
						src={ img }
						alt='' // Disabled due to redundancy
						sizes={ `${(img.width / img.height) * 350}px` }
						fill
					/>
					<div>
						<span>{ name }</span>
					</div>
				</div>
			</motion.button>

			<AnimatePresence mode='wait'>
				{currentId === id && (
					<motion.div
						className={
							[
								modalStyle.modal,
								style['card-container'],
							].join(' ')
						}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<button onClick={ () => setCurrentId(null) } aria-label='Close'>
							<Image
								src={ closeIcon }
								alt='Close'
								width={ 12 }
							/>
						</button>
						<motion.div
							layoutId={ currentId }
							className={
								[
									style.content,
									isImage ? style.image : '',
									maximize ? style.maximized : '',
								].join(' ')
							}
						>
							{ !isImage ? children : (
								<>
									<Image
										src={ img }
										alt={ name }
										unoptimized={ true }
										onClick={ () => setMaximize(!maximize) }
									/>
								</>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
