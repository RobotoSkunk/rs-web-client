import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';


const inter = Inter({ subsets: [ 'latin' ] });

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
		<html lang="en">
			<body className={inter.className}>
				<main>
					{children}
				</main>
			</body>
		</html>
	);
}
