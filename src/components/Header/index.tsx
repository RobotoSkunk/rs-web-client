
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
				<button>Home</button>
				<button>Menu</button>
			</div>
		</header>
	);
}
