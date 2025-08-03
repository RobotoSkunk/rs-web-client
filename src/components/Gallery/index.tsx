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

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import style from './gallery.module.css';


interface Properties
{
	gallery: ArtworkData[];
}


const fullscreenPictureVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 500 : -500,
		opacity: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
		zIndex: 1,
	},
	exit: (direction: number) => ({
		x: direction < 0 ? 500 : -500,
		opacity: 0,
		zIndex: 0,
	}),
} satisfies Variants;


export default function Gallery(props: Properties)
{
	const [ [ page, direction ], setPagination ] = useState([0, 1]);
	// const [ zoom, setZoom ] = useState(false);


	function setPage(newPage: number)
	{
		if (newPage != page) {
			var direction = newPage < page ? -1 : 1;

			setPagination([ newPage, direction ]);
		}
	}

	function paginate(direction: number)
	{
		var newPage = page + direction;

		if (newPage >= props.gallery.length) {
			newPage = 0;
		} else if (newPage < 0) {
			newPage = props.gallery.length - 1;
		}

		setPagination([ newPage, direction ]);
	}


	return (
		<>
			{/* <div className={ style.gallery }>
				{ props.artworks.map((v, i) =>
				(
					<motion.button
						className={ style.picture }
						key={ i }
					>
						<Image
							src={ v.img }
							alt={ v.name['en-US'] }

							fill={ true }
						/>
					</motion.button>
				)) }
			</div> */}

			<div className={ style['fullscreen-gallery'] }>
				<div className={ style.visor }>
					<button onClick={ () => paginate(-1) }>
						{ '<<<' }
					</button>
					<div className={ style['picture-container'] }>
						<AnimatePresence
							initial={ false }
							custom={ direction }
						>
							<motion.img
								className={ style.picture }
								custom={ direction }

								variants={ fullscreenPictureVariants }
								initial='enter'
								animate='center'
								exit='exit'
								transition={{
									x: { 
										type: 'spring',
										stiffness: 300,
										damping: 30,
									},
									opacity: {
										duration: 0.2,
									},
								}}

								drag='x'
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={ 0.5 }
								onDragEnd={(_, panInfo) =>
								{
									const swipe = Math.abs(panInfo.offset.x) * panInfo.velocity.x;

									if (swipe < -10000) {
										paginate(1);
									} else if (swipe > 10000) {
										paginate(-1);
									}
								}}

								src={ props.gallery[page].img.src }
								alt={ props.gallery[page].name['en-US'] }

								key={ props.gallery[page].img.src }

								draggable={ false }
							/>
						</AnimatePresence>
					</div>
					<button onClick={ () => paginate(1) }>
						{ '>>>' }
					</button>
				</div>

				<div className={ style.title }>
					<AnimatePresence mode='popLayout'>
						{ props.gallery[page].name['en-US'].split('').map((char, i) => (
							<motion.span
								initial={{ opacity: 0, y: -25 }}
								animate={{ opacity: 1, y: 0 }}
								exit   ={{ opacity: 0, y: 25 }}

								transition={{
									delay: i / 75,
								}}

								key={ props.gallery[page].img.src + char + i }
							>
								{ char === ' ' ? '\u00A0' : char }
							</motion.span>
						)) }
					</AnimatePresence>
				</div>

				<motion.div
					className={ style.scroller }
				>
					<motion.div
						className={ style.strip }
					>
						{ props.gallery.map((v, i) => (
							<button
								className={ [
									style.picture,
									page === i ? style.selected : '',
								].join(' ') }
								onClick={ () => setPage(i) }

								key={ i }
							>
								<Image
									src={ v.img }
									alt={ v.name['en-US'] }

									quality={ 65 }
									sizes={ '256px' }

									fill
									draggable={ false }
								/>
							</button>
						)) }
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}
