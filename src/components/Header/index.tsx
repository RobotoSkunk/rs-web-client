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
import Link from 'next/link';
import { useEffect } from 'react';

import { robotoCondensed } from '@/utils/fonts';

import backImage from '@/assets/svg/symbols/back.svg';
import { usePathname } from 'next/navigation';
import SpanLink from './SpanLink';




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
	const pathname = usePathname();
	const lang = params.lang;

	useEffect(() => displayHomeLink(pathname as string, lang), [ pathname, lang ]);

	const linksData = {
		time: 0.5,
		links: [
			{
				href: `/${lang}/about`,
				label: 'About me',
			},
			// {
			// 	href: `/${lang}/blog`,
			// 	label: 'Blog',
			// },
			// {
			// 	href: `/${lang}/commissions`,
			// 	label: 'Commissions',
			// },
			{
				href: `/${lang}/portfolio`,
				label: 'Portfolio',
			},
			{
				href: `/${lang}/contact`,
				label: 'Contact',
			},
			{
				href: `/${lang}/support-me`,
				label: 'Support me',
			},
		]
	}

	return (
		<header className={ robotoCondensed.className }>
			<div className='nav-menu-bg'></div>

			<nav>
				{
					linksData.links.map((data, index) =>
					{
						const delay = linksData.time / linksData.links.length * index;

						return (
							<SpanLink
								href={ data.href }
								delay={ 0.2 + delay }
								key={ index }
							>
								{ data.label }
							</SpanLink>
						);
					})
				}
			</nav>

			<div id='nav-menu'>
				<div>
					<Link href={ `/${lang}` } className='home-link'>
						<Image
							alt=''
							src={ backImage }
							width={ 20 }
							priority={ true }
						/>
						<span>Home</span>
					</Link>
				</div>
				<button id='nav-toggle' aria-label='Toggle menu' onClick={toggleNav}>
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
