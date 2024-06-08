/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */
'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { Roboto_Condensed } from 'next/font/google';

import style from './article.module.css';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import closeIcon from '@/assets/svg/symbols/close.svg';


const roboto = Roboto_Condensed({ weight: '300', subsets: [ 'latin' ] });



export default function ArticleModal({
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
			<motion.button layoutId={ id } className={ style.project } onClick={ () => setCurrentId(id) }>
				<div className={ style.preview + ' ' + roboto.className }>
					<Image
						src={ img }
						alt={ name }
						sizes='750px'
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
						className={ style.article }
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
								<Image
									src={ img }
									alt={ name }
									unoptimized={ true }
									onClick={ () => setMaximize(!maximize) }
								/>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
