
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import Background from '@/components/Background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const roboto = Roboto({ weight: '400', subsets: [ 'latin' ] });

export const metadata: Metadata = {
	title: 'RobotoSkunk',
	description: "I'm a Full Stack developer who makes commissioned artwork, games, websites, bots and microservices.",
};



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>)
{
	return (
		<html lang='en'>
			<head>
				<noscript><meta http-equiv="refresh" content="0; url=/noscript"></meta></noscript>
			</head>

			<body className={roboto.className}>
				<Background/>

				<div id='app'>
					<Header/>

					{children}

					<Footer/>
				</div>
			</body>
		</html>
	);
}