/*
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
 */

'use client';

import { RefObject, useRef, useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';
import { motion, MotionProps, Variants } from 'framer-motion';

import style from './dropdown.module.css';


export default function Dropdown({
	options,
}: {
	options: {
		icon?: StaticImageData,
		label: string,
	}[],
})
{
	const optionsRef: RefObject<HTMLDivElement | null> = useRef(null);
	const toggleButtonRef: RefObject<HTMLAnchorElement | null> = useRef(null);

	const [ open, setOpen ] = useState(false);


	function setTagPosition()
	{
		if (optionsRef.current && toggleButtonRef.current) {
			const rect = toggleButtonRef.current.getBoundingClientRect();

			optionsRef.current.style.left = `${rect.x + 5}px`;
			optionsRef.current.style.top = `${rect.top - 5}px`;

			console.log(rect);
		}
	}

	useEffect(() =>
	{
		if (optionsRef.current) {
			document.querySelector('body')?.appendChild(optionsRef.current);
		}

		setTagPosition();

		window.addEventListener('resize', () => setTagPosition());
	}, []);


	function toggle(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>)
	{
		setTagPosition();
		setOpen(!open);
	}



	// #region Variants
	const optionsVariant = {
		open: {
			scale: 1,
			transition: {
				type: 'spring',
				duration: 0.5,
				delayChildren: 0.2,
				staggerChildren: 0.05,
			},
			translateY: '-100%',
			transformOrigin: '0% 100%',
		},
		closed: {
			scale: 0,
			transition: {
				delay: 0.2,
			},
			translateY: '-100%',
			transformOrigin: '0% 100%',
		},
	} satisfies Variants;

	const itemProps = {
		variants: {
			closed: {
				x: -50,
				opacity: 0,
			},
			open: {
				x: 0,
				opacity: 1,
			},
		}
	} satisfies MotionProps;
	//#endregion

	return <>
		<a
			className={ style.link }
			ref={ toggleButtonRef }
			href='#'
			onClick={ (ev) => toggle(ev) }
		>
			{ options[0].label }
			<div className={ style.arrow }></div>
		</a>
		<motion.div
			ref={ optionsRef }
			className={ style.options }
			variants={ optionsVariant }
			animate={ open ? 'open' : 'closed' }
			initial={ 'closed' }
		>
			{options.map((value, index) => (
				<motion.button
					className={ style.dropdown }
					key={ index }
					{ ...itemProps }
				>
					{ value.label }
				</motion.button>
			))}
		</motion.div>
	</>;
}
