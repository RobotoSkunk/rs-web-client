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

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

import { robotoCondensed } from '@/utils/fonts';

import backImage from '@/assets/svg/symbols/back.svg';

import { useDictionary } from '../providers/DictionaryProvider';


export default function Header({
	params,
}: {
	params: { lang: string },
})
{
	const dict = useDictionary();

	const pathname = usePathname();
	const lang = params.lang;

	const backDiv = useRef<HTMLDivElement | null>(null);
	const [ backPath, setBackPath ] = useState<string>(`/${lang}`);
	const [ backText, setBackText ] = useState<string>(dict.layout.header.home);


	function toggleNav()
	{
		document.querySelector('header')?.classList.toggle('nav-open');
	}

	useEffect(() =>
	{
		if (!backDiv.current) {
			return;
		}

		const path = pathname.replace(`/${lang}`, '');
		const backActionInput = document.getElementById('back-action') as HTMLInputElement | undefined;

		backDiv.current.classList.toggle('show-home', path.length > 0);

		if (backActionInput) {
			const backDir = backActionInput.value;

			setBackPath(`/${lang}/${backDir}`);
			setBackText(dict.layout.header.back);

			backActionInput.remove();
		} else {
			setBackPath(`/${lang}`);
			setBackText(dict.layout.header.home);
		}

		console.log(pathname, Boolean(backActionInput));

		document.querySelector('header')?.classList.remove('nav-open');
	}, [ pathname ]);


	const navVariants = {
		visible: {
			transition: {
				delayChildren: 0,
				staggerChildren: 0.1,
			}
		}
	} satisfies Variants;

	const linkVariants = {
		hidden: {
			y: -10,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	} satisfies Variants;


	return (
		<header className={ robotoCondensed.className }>
			<div className='nav-menu-bg'></div>

			<motion.nav
				variants={navVariants}
	
				initial='hidden'
				animate='visible'
			>
				{/* <motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/blog` }>
						Blog
					</Link>
				</motion.span> */}
				<motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/portfolio` }>
						{ dict.layout.header.portfolio }
					</Link>
				</motion.span>
				<motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/illustrations` }>
						{ dict.layout.header.illustrations }
					</Link>
				</motion.span>
				<motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/commissions` }>
						{ dict.layout.header.commissions }
					</Link>
				</motion.span>
				<motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/contact` }>
						{ dict.layout.header.contact }
					</Link>
				</motion.span>
				<motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/support-me` }>
						{ dict.layout.header['support-me'] }
					</Link>
				</motion.span>
			</motion.nav>

			<div  id='nav-menu' ref={ backDiv }>
				<div>
					<Link href={ backPath } className='home-link'>
						<Image
							alt=''
							src={ backImage }
							width={ 20 }
							priority={ true }
						/>
						<span>{ backText }</span>
					</Link>
				</div>
				<button id='nav-toggle' aria-label={ dict.layout.header.aria['toggle-menu'] } onClick={ toggleNav }>
					<div className='lines'>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</button>
			</div>
		</header>
	);
}
