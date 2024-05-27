
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import '@/styles/error.globals.css';


const roboto = Roboto({ weight: '300', subsets: [ 'latin' ] });

export const metadata: Metadata = {
	title: 'Error'
};



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>)
{
	return (
		<html lang='en'>
			<body className={roboto.className}>
				{children}
			</body>
		</html>
	);
}
