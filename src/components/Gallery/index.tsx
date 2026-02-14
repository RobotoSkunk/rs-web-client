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

import Image, { type StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, Transition, useMotionValue, Variants } from 'framer-motion';

import style from './gallery.module.css';

import ArrowIcon from '@/components/icons/Arrow';
import closeIcon from '@/assets/svg/symbols/close.svg';
import { useDictionary } from '../providers/DictionaryProvider';


const paginateButtonsTransition = {
	x: { 
		type: 'spring',
		bounce: 0.35,
	},
	y: { 
		type: 'spring',
		stiffness: 300,
		damping: 30,
	},
	opacity: {
		duration: 0.35,
	},
} satisfies Transition<any>;

const uiTransition = {
	y: { 
		type: 'spring',
		bounce: 0.35,
	},
	opacity: {
		duration: 0.35,
	},
} satisfies Transition<any>;


export default function Gallery({
	gallery,
	content,
}: {
	gallery: { img: StaticImageData, alt: string }[];
	content: (func: (index: number) => void) => React.ReactNode;
})
{
	const dict = useDictionary();

	const [ openGallery, setOpenGallery ] = useState(false);

	const [ isMobile, setIsMobile ] = useState(false);
	const [ isTap, setIsTap ] = useState(true);
	const [ canAutoHide, setCanAutoHide ] = useState(true);

	const pictureContainerRef = useRef<HTMLDivElement | null>(null);

	const [ [ page, direction ], setPagination ] = useState([0, 1]);
	const [ showControls, setShowControls ] = useState(false);
	const [ zoom, setZoom ] = useState(0);

	const timeoutId = useRef<NodeJS.Timeout | null>(null);

	const scroll = useMotionValue(0);
	const scrollerRef = useRef<HTMLDivElement | null>(null);
	const [ clickingInScroller, setClickingInScroller ] = useState(true);


	useEffect(() =>
	{
		const deviceType = document.body.getAttribute('device-type');

		if (deviceType && ([ 'mobile', 'tablet' ].includes(deviceType))) {
			setIsMobile(true);
			setShowControls(true);
		}
	}, [ ]);

	useEffect(() =>
	{
		const handleKeydown = (ev: KeyboardEvent) =>
		{
			if (ev.repeat || !openGallery) {
				return;
			}

			switch (ev.key) {
				case 'ArrowLeft': paginate(-1); break;
				case 'ArrowRight': paginate(1); break;
				case 'Escape': closeGallery(); break;
			}
		};

		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	}, [ page ]);


	function toggleScrolling(toggle: boolean)
	{
		document.querySelector('html')?.classList.toggle('no-scroll', !toggle);
	}

	function closeGallery()
	{
		setOpenGallery(false);
		toggleScrolling(true);
	}


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

		if (newPage >= gallery.length) {
			newPage = 0;

		} else if (newPage < 0) {
			newPage = gallery.length - 1;
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

		const originalWidth = gallery[page].img.width;
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
		var y = showControls ? -50 : 0;

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
		} satisfies Variants;
	}

	function paginateButtonsVariants()
	{
		const y = showControls ? -50 : 0;

		return {
			initial: {
				opacity: 0.5,
				x: 0,
				y,
			},
			hover: {
				opacity: 1,
				x: 0,
				y,
			},
			tap: (direction: number) => ({
				opacity: 1,
				x: 10 * direction,
				y,
			}),
			exit: (direction: number) => ({
				opacity: 0,
				x: 150 * direction,
				y,
			}),
		} satisfies Variants;
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
		handleZoom(ev.deltaY > 0 ? 0.15 : -0.15);
	}

	function handleOnMouseLeave()
	{
		if (isMobile || !clickingInScroller) {
			return;
		}

		if (timeoutId.current) {
			clearTimeout(timeoutId.current);
		}

		setShowControls(false);
	}

	function resetIdleTime()
	{
		if (isMobile) {
			return;
		}

		if (timeoutId.current) {
			clearTimeout(timeoutId.current);
		}

		setShowControls(true);

		timeoutId.current = setTimeout(() =>
		{
			if (canAutoHide) {
				setShowControls(false);
			}
		}, 2500)
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
			{ content((index: number) =>
			{
				setPage(index);
				setOpenGallery(true);
				setShowControls(true);
				toggleScrolling(false);
			}) }

			<AnimatePresence presenceAffectsLayout={ false }>
				{ openGallery &&
					<motion.div
						className={ style['fullscreen-gallery'] }
						onMouseMove={ resetIdleTime }
						onMouseLeave={ handleOnMouseLeave }

						initial={{ scale: 1.5, opacity: 0, filter: isMobile ? '' : 'blur(20px)' }}
						animate={{ scale: 1,   opacity: 1, filter: isMobile ? '' : 'blur(0px)' }}
						exit=   {{ scale: 1.5, opacity: 0, filter: isMobile ? '' : 'blur(20px)' }}

						transition={{
							type: 'tween',
							ease: [ 0.452, 0.155, 0.427, 0.991 ],
							duration: 0.3,
						}}
					>
						{ /* Title */ }
						<AnimatePresence>
							{ (showControls && zoom == 0) &&
								<motion.div
									className={ style.title }

									initial={{ opacity: 0, y: -50 }}
									animate={{ opacity: 1, y: 0 }}
									exit=   {{ opacity: 0, y: -50 }}

									transition={ uiTransition }
								>
									<AnimatePresence mode='popLayout'>
										{ isMobile ?
											<motion.span
												initial={{ opacity: 0, y: -25 }}
												animate={{ opacity: 1, y: 0 }}
												exit   ={{ opacity: 0, y: 25 }}

												key={ gallery[page].alt }
											>
												{ gallery[page].alt }
											</motion.span>
											:
											gallery[page].alt.split('').map((char, i) => (
												<motion.span
													initial={{ opacity: 0, y: -25 }}
													animate={{ opacity: 1, y: 0 }}
													exit   ={{ opacity: 0, y: 25 }}

													transition={{
														delay: i / 75,
													}}

													key={ gallery[page].img.src + char + i }
												>
													{ char === ' ' ? <>&nbsp;</> : char }
												</motion.span>
											))
										}
									</AnimatePresence>
								</motion.div>
							}
						</AnimatePresence>

						{ /* Close button */ }
						<AnimatePresence>
							{ zoom == 0 &&
								<motion.button
									className={ style.close }

									aria-label={ dict.components.gallery.close }
									onClick={ () => closeGallery() }

									initial={{ opacity: 0, y: -50 }}
									animate={{ opacity: 1, y: 0 }}
									exit=   {{ opacity: 0, y: -50 }}

									transition={ uiTransition }
								>
									<Image
										src={ closeIcon }
										alt={ dict.components.gallery.close }
										width={ 12 }
									/>
								</motion.button>
							}
						</AnimatePresence>

						{ /* Visor */ }
						<div
							className={ style.visor }
							onWheel={ handleScroll }
						>
							<AnimatePresence initial={ false }>
								{ zoom == 0 &&
									<motion.button
										onClick={ () => paginate(-1) }
										variants={ paginateButtonsVariants() }
										custom={ -1 }

										transition={ paginateButtonsTransition }

										initial='exit'
										animate='initial'
										exit='exit'

										whileHover='hover'
										whileFocus='hover'
										whileTap='tap'

										aria-label={ dict.components.gallery.buttons.previous }
									>
										<ArrowIcon/>
									</motion.button>
								}
							</AnimatePresence>

							<motion.div
								className={ style['picture-container'] }
								ref={ pictureContainerRef }

								aria-label={ dict.components.gallery.visor }

								onTapStart={ handleTouchStart }
								onPan={ handleTouchPan }
								onTouchEnd={ handleTouchEnd }
							>
								<AnimatePresence
									initial={ false }
									custom={ direction }
								>
									<motion.div
										className={ style.picture }
										custom={ direction }

										variants={ fullscreenPictureVariants() }
										initial='enter'
										animate='center'
										exit='exit'
										transition={{
											x: {
												type: 'spring',
												stiffness: 350,
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

										onDrag={ resetIdleTime }
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

										key={ gallery[page].img.src }
									>
										<Image
											src={ gallery[page].img }
											alt={ gallery[page].alt }
											placeholder='blur'

											draggable={ false }
											unoptimized
										/>
									</motion.div>
								</AnimatePresence>
							</motion.div>

							<AnimatePresence initial={ false }>
								{ zoom == 0 &&
									<motion.button
										onClick={ () => paginate(1) }
										variants={ paginateButtonsVariants() }
										custom={ 1 }

										transition={ paginateButtonsTransition }

										initial='exit'
										animate='initial'
										exit='exit'

										whileHover='hover'
										whileFocus='hover'
										whileTap='tap'

										aria-label={ dict.components.gallery.buttons.next }
									>
										<ArrowIcon flip/>
									</motion.button>
								}
							</AnimatePresence>
						</div>

						{ /* Scroller */ }
						<AnimatePresence>
							{ (showControls && zoom == 0) &&
								<motion.div
									className={ style.scroller }

									initial={{ opacity: 0, y: 200 }}
									animate={{ opacity: 1, y: 0 }}
									exit=   {{ opacity: 0, y: 200 }}

									onMouseEnter={ () => setCanAutoHide(false) }
									onMouseLeave={ () => setCanAutoHide(true) }

									ref={ scrollerRef }

									transition={ uiTransition }
								>
									<motion.div
										className={ [
											style.strip,
											!clickingInScroller ? style.dragging : '',
										].join(' ') }

										initial={{ x: scroll.get() }}
										style={{ x: scroll }}

										onMouseOver={ () => setCanAutoHide(false) }
										onWheel={(ev) =>
										{
											if (!scrollerRef.current) {
												return;
											}

											var newScroll = scroll.get() + ev.deltaY;

											const box = ev.currentTarget.getBoundingClientRect();
											const containerBox = scrollerRef.current.getBoundingClientRect();

											// TODO: Fix this workaround
											if (
												(ev.deltaY > 0 && box.left + ev.deltaY > containerBox.left) ||
												(ev.deltaY < 0 && box.right + ev.deltaY < containerBox.right)
											) {
												return;
											}

											scroll.set(newScroll);
										}}

										drag='x'
										dragConstraints={ scrollerRef }
										onDragStart={ () => setClickingInScroller(false) }
										onDragEnd={ () => setClickingInScroller(true) }
									>
										{ gallery.map((v, i) => (
											<button
												className={ [
													style.picture,
													!clickingInScroller ? style.dragging : '',
													page === i ? style.selected : '',
												].join(' ') }

												onClick={() =>
												{
													if (clickingInScroller) {
														setPage(i);
													}
												}}

												key={ i }
											>
												<Image
													src={ v.img }
													alt={ v.alt }

													quality={ 65 }
													height={ 150 }
													placeholder='blur'

													draggable={ false }
												/>
											</button>
										)) }
									</motion.div>
								</motion.div>
							}
						</AnimatePresence>
					</motion.div>
				}
			</AnimatePresence>
		</>
	);
}
