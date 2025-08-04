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
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import style from './gallery.module.css';

import ArrowIcon from '@/components/icons/Arrow';


interface Properties
{
	gallery: ArtworkData[];
}


const paginateButtonsVariants = {
	initial: {
		opacity: 0.5,
		x: 0,
	},
	hover: (direction: number) => ({
		opacity: 1,
		x: 10 * direction,
	}),
	tap: (direction: number) => ({
		opacity: 1,
		x: 25 * direction,
	}),
	exit: (direction: number) => ({
		opacity: 0,
		x: 150 * direction,
	}),
} satisfies Variants;


export default function Gallery(props: Properties)
{
	const [ isMobile, setIsMobile ] = useState(false);
	const [ isTap, setIsTap ] = useState(true);
	const [ canAutoHide, setCanAutoHide ] = useState(true);

	const pictureContainerRef = useRef<HTMLDivElement | null>(null);

	const [ [ page, direction ], setPagination ] = useState([0, 1]);
	const [ showControls, setShowControls ] = useState(false);
	const [ zoom, setZoom ] = useState(0);

	const [ timeoutId, setTimeoutId ] = useState<NodeJS.Timeout | null>(null);


	useEffect(() =>
	{
		const deviceType = document.body.getAttribute('device-type');

		if (deviceType && deviceType === 'mobile') {
			setIsMobile(true);
			setShowControls(true);
		}
	}, [ ]);

	// #region Navigation

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

	function getPictureElement()
	{
		if (pictureContainerRef.current) {
			return pictureContainerRef.current.querySelector('img');
		}

		return null;
	}

	function handleZoom(delta: number)
	{
		var newZoom = zoom - delta;

		const originalWidth = props.gallery[page].img.width;
		const previewWidth = getPictureElement()?.width ?? 1;

		const maxZoom = originalWidth / previewWidth;


		if ((1 + newZoom) > maxZoom) {
			newZoom = maxZoom - 1;
		}

		if (newZoom <= 0) {
			newZoom = 0;
		}

		setZoom(newZoom);
	}

	// #endregion

	function fullscreenPictureVariants()
	{
		const canScale = showControls && zoom == 0;

		var scale = canScale ? 0.8 : 1;
		var y = canScale ? -50 : 0;

		if (zoom > 0) {
			scale = 1 + zoom;
			y = 0.01;
		}

		return {
			enter: (direction: number) => ({
				x: direction > 0 ? 500 : -500,
				opacity: 0,
				scale,
				y,
			}),
			center: {
				x: zoom == 0 ? 0 : 0.01,
				opacity: 1,
				zIndex: 1,
				scale,
				y,
			},
			exit: (direction: number) => ({
				x: direction < 0 ? 500 : -500,
				opacity: 0,
				zIndex: 0,
				scale,
				y,
			}),
		} satisfies Variants
	}

	function getPictureConstraints()
	{
		const picture = getPictureElement();

		if (!picture) {
			return {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
			};
		}

		var width = picture.width * (1 + zoom) - (window.innerWidth - 100);
		var height = picture.height * (1 + zoom) - (window.innerHeight - 100);

		if (width < 0) {
			width = 0;
		}

		if (height < 0) {
			height = 0;
		}


		return {
			left: -width / 2,
			right: width / 2,
			top: -height / 2,
			bottom: height / 2,
		};
	}

	// #region PC controls
	function handleScroll(ev: React.WheelEvent<HTMLDivElement>)
	{
		handleZoom(ev.deltaY / 500);
	}

	function handleOnMouseLeave()
	{
		if (isMobile) {
			return;
		}

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		setShowControls(false);
	}

	function handleOnMouseMove()
	{
		if (isMobile) {
			return;
		}

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		setShowControls(true);

		setTimeoutId(
			setTimeout(() =>
			{
				if (canAutoHide) {
					setShowControls(false);
				}
			}, 2500)
		);
	}
	// #endregion

	// #region Touch controls
	function handleTouchStart()
	{
		if (!isMobile) {
			return;
		}

		setIsTap(true);
	}

	function handleTouchEnd()
	{
		if (!isMobile || !isTap) {
			return;
		}

		setShowControls(!showControls);
	}

	function handleTouchPan()
	{
		if (!isMobile || !isTap) {
			return;
		}

		setIsTap(false);
	}
	// #endregion


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

			<div
				className={ style['fullscreen-gallery'] }
				onMouseMove={ handleOnMouseMove }
				onMouseLeave={ handleOnMouseLeave }
			>
				<div
					className={ style.visor }
					onWheel={ handleScroll }
				>
					<AnimatePresence initial={ false }>
						{ zoom == 0 &&
							<motion.button
								onClick={ () => paginate(-1) }
								variants={ paginateButtonsVariants }
								custom={ -1 }

								initial='exit'
								animate='initial'
								exit='exit'

								whileHover='hover'
								whileFocus='hover'
								whileTap='tap'
							>
								<ArrowIcon/>
							</motion.button>
						}
					</AnimatePresence>

					<motion.div
						className={ style['picture-container'] }
						ref={ pictureContainerRef }

						onTapStart={ handleTouchStart }
						onPan={ handleTouchPan }
						onTouchEnd={ handleTouchEnd }
					>
						<AnimatePresence
							initial={ false }
							custom={ direction }
						>
							<motion.img
								className={ style.picture }
								custom={ direction }

								variants={ fullscreenPictureVariants() }
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

								style={{
									zIndex: zoom > 0 ? 5 : 1,
								}}

								drag={ zoom > 0 ? true : 'x' }
								dragElastic={ zoom > 0 ? 0.25 : 0.5 }
								dragConstraints={ zoom > 0 ? getPictureConstraints() : { left: 0, right: 0 } }

								onDragEnd={(_, panInfo) =>
								{
									if (zoom > 0) {
										return;
									}

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
					</motion.div>

					<AnimatePresence initial={ false }>
						{ zoom == 0 &&
							<motion.button
								onClick={ () => paginate(1) }
								variants={ paginateButtonsVariants }
								custom={ 1 }

								initial='exit'
								animate='initial'
								exit='exit'

								whileHover='hover'
								whileFocus='hover'
								whileTap='tap'
							>
								<ArrowIcon flip/>
							</motion.button>
						}
					</AnimatePresence>
				</div>

				<AnimatePresence>
					{ (showControls && zoom == 0) &&
						<motion.div
							className={ style.title }

							initial={{ opacity: 0,y: -50 }}
							animate={{ opacity: 1,y: 0 }}
							exit=   {{ opacity: 0,y: -50 }}
						>
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
						</motion.div>
					}
				</AnimatePresence>

				<AnimatePresence>
					{ (showControls && zoom == 0) &&
						<motion.div
							className={ style.scroller }

							initial={{ opacity: 0,y: 200 }}
							animate={{ opacity: 1,y: 0 }}
							exit=   {{ opacity: 0,y: 200 }}

							onMouseEnter={ () => setCanAutoHide(false) }
							onMouseLeave={ () => setCanAutoHide(true) }

							transition={{
								x: { 
									type: 'inertia',
								},
								opacity: {
									duration: 0.2,
								},
							}}
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
					}
				</AnimatePresence>
			</div>
		</>
	);
}
