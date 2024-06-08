/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

'use client';

import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { motion } from 'framer-motion';

const roboto = Roboto({ weight: '300', subsets: [ 'latin' ] });


export default function Footer()
{
	const year = new Date().getFullYear();

	return (
		<motion.footer
			className={roboto.className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<span>
				© Copyright {year} RobotoSkunk. All Rights Reserved.
			</span>
			<span>
				{/* <Link href='/privacy'>Privacy Policy</Link>
				{ " • " }
				<Link href='/terms'>Terms of Use</Link>
				{ " • " } */}
				<Link href='/open-source'>Open Source</Link>
			</span>
		</motion.footer>
	);
}
