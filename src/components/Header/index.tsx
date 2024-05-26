
import Image from 'next/image';
import { Roboto_Condensed } from 'next/font/google';

const roboto = Roboto_Condensed({ weight: '300', subsets: [ 'latin' ] });


export default function Header()
{
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
				<a href='/'>
					<Image
						alt=''
						src='/assets/svg/symbols/back.svg'
						width={20}
						height={15}
					/>
					<span>Home</span>
				</a>
				<button id="nav-toggle" aria-label="Toggle menu">
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
