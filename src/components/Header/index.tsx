'use client';

import Image from 'next/image';
import { Roboto_Condensed } from 'next/font/google';
import { useEffect } from 'react';

const roboto = Roboto_Condensed({ weight: '300', subsets: [ 'latin' ] });



function toggleNav()
{
	document.querySelector('header')?.classList.toggle('nav-open');
}

function hideHomeLink()
{
	const url = new URL(location.href)

	if (url.pathname === '/') {
		const navMenu = document.getElementById('nav-menu');

		if (navMenu) {
			navMenu.classList.add('hide-home');
		}
	}
}


export default function Header()
{
	useEffect(hideHomeLink, []);

	return (
		<header className={roboto.className}>
			<nav>
				<a href='#'>About me</a>
				<a href='#'>Blog</a>
				<a href='#'>Commissions</a>
				<a href='#'>Portfolio</a>
				<a href='#'>Contact</a>
				<a href='#'>Donate</a>
			</nav>

			<div id='nav-menu'>
				<div className='dummy-div'></div>
				<a href='/' className='home-link'>
					<Image
						alt=''
						src='/assets/svg/symbols/back.svg'
						width={20}
						height={15}
					/>
					<span>Home</span>
				</a>
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
