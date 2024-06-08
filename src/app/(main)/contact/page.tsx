/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import Link from 'next/link';
import style from './page.module.css';


export default function Page()
{
	return (
		<main className={ style.main }>
			<h1>Contact</h1>
			<p>
				Thanks for wanting to get in touch with me! Here are the multiple ways you can
				talk with me.
			</p>

			<section>
				<h2>Email</h2>
				<p>This is my main and only public email.</p>
				<p>
					<Link href='mailto:contact@robotoskunk.com' className={ `${style.email} button` }>
						contact@robotoskunk.com
					</Link>
				</p>
			</section>
		</main>
	);
}
