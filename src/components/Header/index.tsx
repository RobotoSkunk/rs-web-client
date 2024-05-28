'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Roboto_Condensed } from 'next/font/google';
import { useEffect } from 'react';

import backImage from '@/assets/svg/symbols/back.svg';
import { usePathname } from 'next/navigation';


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

	return (
		<header className={roboto.className}>
			<nav>
				<Link href='/about'>About me</Link>
				<Link href='/blog'>Blog</Link>
				<Link href='/commissions'>Commissions</Link>
				<Link href='/portfolio'>Portfolio</Link>
				<Link href='/contact'>Contact</Link>
				<Link href='/donate'>Donate</Link>
			</nav>

			<div id='nav-menu'>
				<div className='dummy-div'></div>
				<Link href='/' className='home-link'>
					<Image
						alt=''
						src={backImage}
						width={20}
					/>
					<span>Home</span>
				</Link>
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
