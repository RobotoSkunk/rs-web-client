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
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, MotionProps, Variants } from 'framer-motion';

import { robotoCondensed } from '@/utils/fonts';

import backImage from '@/assets/svg/symbols/back.svg';

import { useDictionary } from '../providers/DictionaryProvider';




function toggleNav()
{
	document.querySelector('header')?.classList.toggle('nav-open');
}

function displayHomeLink(pathname: string, lang: string)
{
	const navMenu = document.getElementById('nav-menu');

	pathname = pathname.replace(`/${lang}`, '');

	if (navMenu) {
		navMenu.classList.toggle('show-home', pathname !== '');
	}

	document.querySelector('header')?.classList.remove('nav-open');
}



export default function Header({
	params,
}: {
	params: { lang: string },
})
{
	const dict = useDictionary();

	const pathname = usePathname();
	const lang = params.lang;

	useEffect(() => displayHomeLink(pathname as string, lang), [ pathname, lang ]);


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
				<motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/about` }>
						{ dict.layout.header.about }
					</Link>
				</motion.span>
				{/* <motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/blog` }>
						Blog
					</Link>
				</motion.span>
				<motion.span { ...linkVariants }>
					<Link href={ `/${lang}/commissions` }>
						{ dict.layout.header.commissions }
					</Link>
				</motion.span> */}
				<motion.span variants={ linkVariants }>
					<Link href={ `/${lang}/portfolio` }>
						{ dict.layout.header.portfolio }
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

			<div id='nav-menu'>
				<div>
					<Link href={ `/${lang}` } className='home-link'>
						<Image
							alt=''
							src={ backImage }
							width={ 20 }
							priority={ true }
						/>
						<span>{ dict.layout.header.home }</span>
					</Link>
				</div>
				<button id='nav-toggle' aria-label={ dict.layout.header.aria['toggle-menu'] } onClick={toggleNav}>
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
