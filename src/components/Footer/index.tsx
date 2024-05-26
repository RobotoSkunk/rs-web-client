
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '300', subsets: [ 'latin' ] });


export default function Footer()
{
	const year = new Date().getFullYear();

	return (
		<footer className={roboto.className}>
			<span>
				© Copyright {year} RobotoSkunk. All Rights Reserved.
			</span>
			<span>
				<a href='#'>Privacy Policy</a> • <a href='#'>Terms of Use</a>
			</span>
		</footer>
	);
}
