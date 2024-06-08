/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */
'use client';

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Roboto_Condensed } from 'next/font/google';

import style from './article.module.css';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import closeIcon from '@/assets/svg/symbols/close.svg';


const roboto = Roboto_Condensed({ weight: '300', subsets: [ 'latin' ] });

export default function ArticleModal({
	children,
	name,
	id,
	img,
	currentId,
	setCurrentId,
}: Readonly<{
	children: React.ReactNode,
	name: string,
	id: string,
	img: StaticImport,
	currentId: null|string,
	setCurrentId(id: null|string): void,
}>)
{
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
						<motion.div
							className={ style.content }
							layoutId={ currentId }
						>
							<button onClick={ () => setCurrentId(null) } aria-label='Close'>
								<Image
									src={ closeIcon }
									alt='Close'
									width={ 12 }
								/>
							</button>
							<div>
								{ children }
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
