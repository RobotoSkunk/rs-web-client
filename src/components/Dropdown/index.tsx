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
import Image, { StaticImageData } from 'next/image';
import { motion, MotionProps, Variants } from 'framer-motion';

import style from './dropdown.module.css';


interface DropdownOption
{
	icon?: StaticImageData;
	label: string;
	value: string;
	default?: boolean;
}


export default function Dropdown({
	options,
	onValueChange,
}: {
	options: DropdownOption[],
	onValueChange: (value: string) => void,
})
{
	const optionsRef: RefObject<HTMLDivElement | null> = useRef(null);
	const toggleButtonRef: RefObject<HTMLAnchorElement | null> = useRef(null);

	const [ open, setOpen ] = useState(false);
	const [ selected, setSelected ] = useState(null as DropdownOption | null);


	function setTagPosition()
	{
		if (optionsRef.current && toggleButtonRef.current) {
			const rect = toggleButtonRef.current.getBoundingClientRect();

			optionsRef.current.style.left = `${rect.x + 5}px`;
			optionsRef.current.style.top = `${rect.top - 5}px`;
		}
	}

	useEffect(() =>
	{
		if (optionsRef.current) {
			document.querySelector('body')?.appendChild(optionsRef.current);
		}

		setTagPosition();

		for (const option of options) {
			if (option.default) {
				setSelected(option);
				break;
			}
		}
	
		if (!selected) {
			setSelected(options[0]);
		}

		function clickedOutside(ev: MouseEvent)
		{
			if (toggleButtonRef.current && !toggleButtonRef.current.contains(ev.target as any)) {
				setOpen(false);
			}
		}

		function resize() { setTagPosition() }

		document.addEventListener('mousedown', clickedOutside);
		window.addEventListener('resize', resize);

		return () => {
			document.removeEventListener('mousedown', clickedOutside);
			window.removeEventListener('resize', resize);
		};
	}, [ options ]);


	function toggle(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>)
	{
		ev.preventDefault();

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
		},
		closed: {
			scale: 0,
			transition: {
				delay: 0.2,
			},
			translateY: '-100%',
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
			{ selected?.icon ? 
				<Image
					src={ selected.icon }
					alt=''
				/>
			: '' }
			{ selected?.label }
			<div className={ style.arrow }></div>
		</a>
		<motion.div
			ref={ optionsRef }
			className={ style.options }
			variants={ optionsVariant }
			animate={ open ? 'open' : 'closed' }
			initial={ 'closed' }
		>
			{options.map((option, index) => (
				<motion.button
					className={ style.dropdown }
					onClick={ () => {
						setSelected(option);
						onValueChange(option.value);
					} }
					key={ index }
					{ ...itemProps }
				>
					{ option.icon ? 
						<Image
							src={ option.icon }
							alt=''
						/>
					: '' }
					{ option.label }
				</motion.button>
			))}
		</motion.div>
	</>;
}
