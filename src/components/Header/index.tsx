/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Roboto_Condensed } from 'next/font/google';
import { useEffect } from 'react';

import backImage from '@/assets/svg/symbols/back.svg';
import { usePathname } from 'next/navigation';
import SpanLink from './SpanLink';


const roboto = Roboto_Condensed({ weight: '300', subsets: [ 'latin' ] });



function toggleNav()
{
	document.querySelector('header')?.classList.toggle('nav-open');
}

function displayHomeLink(pathname: string)
{
	const navMenu = document.getElementById('nav-menu');

	if (navMenu) {
		navMenu.classList.toggle('show-home', pathname !== '/');
	}

	document.querySelector('header')?.classList.remove('nav-open');
}



export default function Header()
{
	const pathname = usePathname();

	useEffect(() => displayHomeLink(pathname as string), [ pathname ]);

	const linksData = {
		time: 0.5,
		links: [
			{
				href: '/about',
				label: 'About me',
			},
			// {
			// 	href: '/blog',
			// 	label: 'Blog',
			// },
			// {
			// 	href: '/commissions',
			// 	label: 'Commissions',
			// },
			{
				href: '/portfolio',
				label: 'Portfolio',
			},
			{
				href: '/contact',
				label: 'Contact',
			},
			{
				href: '/donate',
				label: 'Donate',
			},
		]
	}

	return (
		<header className={ roboto.className }>
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
					<Link href='/' className='home-link'>
						<Image
							alt=''
							src={backImage}
							width={20}
						/>
						<span>Home</span>
					</Link>
				</div>
				<button id="nav-toggle" aria-label="Toggle menu" onClick={toggleNav}>
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
