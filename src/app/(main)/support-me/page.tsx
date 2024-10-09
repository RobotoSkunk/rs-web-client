/*
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2024  Edgar Lima (RobotoSkunk)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Link from 'next/link';
import Image from 'next/image';

import style from './page.module.css';

import alexHappy from '@/assets/img/alex-happy.webp';

import buyMeACoffee from '@/assets/svg/branding/buy-me-a-coffee.svg';
import paypalDonate from '@/assets/svg/branding/paypal-donate.svg';


export default function Page()
{
	return (
		<main>
			<h1>Support me</h1>
			<p>Thank you for your interest in supporting me!</p>

			<Image
				src={ alexHappy }
				alt='Alex happy'
				width={ 300 }
				quality={ 100 }
			/>

			<div className={ style.buttons }>
				<div>
					<Link
						href='https://buy.stripe.com/aEUbL527K1XCdyw6oo'
						className='button'
						target='_blank'
						rel='noreferrer noopener'
					>
						Donate with Stripe!
					</Link>
				</div>
				<Link
					href='https://ko-fi.com/robotoskunk'
					title='Buy me a coffee!'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Image
						src={ buyMeACoffee }
						alt='Buy me a coffee!'
						width={ 300 }
					/>
				</Link>
				<Link
					href='https://www.paypal.com/donate/?hosted_button_id=3JHSMUXWCY7FY'
					title='Donate with PayPal!'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Image
						src={ paypalDonate }
						alt='Donate with PayPal!'
						width={ 300 }
					/>
				</Link>
			</div>
		</main>
	);
}
