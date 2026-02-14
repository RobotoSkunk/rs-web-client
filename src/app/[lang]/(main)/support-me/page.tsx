/**
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
**/

import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import style from './page.module.css';
import { getDictionary } from '@/app/dictionaries';

import alexHappy from '@/assets/img/alex-happy.webp';

import kofiSymbol from '@/assets/svg/branding/kofi-symbol.svg';
import paypalSymbol from '@/assets/svg/branding/paypal-symbol.svg';
import stripeLogo from '@/assets/svg/branding/stripe.svg';


export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: Localizations }>,
}): Promise<Metadata>
{
	const lang = (await params).lang;
	const dict = await getDictionary(lang);

	return {
		title: dict.pages['support-me'].h1,
	};
}

export default async function Page({
	params,
}: {
	params: Promise<{ lang: Localizations }>,
})
{
	const lang = (await params).lang;
	const dict = await getDictionary(lang);

	return (
		<main>
			<h1>{ dict.pages['support-me'].h1 }</h1>
			<p>{ dict.pages['support-me'].h1p }</p>

			<Image
				src={ alexHappy }
				alt={ dict.pages['support-me']['img-alt'] }
				width={ 300 }
				placeholder='blur'

				priority={ true }
				fetchPriority='high'
			/>

			<div className={ style.buttons }>
				<Link
					href='https://buy.stripe.com/6oEcPj14kdVN9EceUU'
					className={ style.stripe }
					target='_blank'
					rel='noreferrer noopener'
				>
					<b>{ dict.pages['support-me']['button-stripe'] }</b>
					<Image
						src={ stripeLogo }
						alt='Stripe'
						height={ 25 }
					/>
				</Link>
				<Link
					href='https://ko-fi.com/robotoskunk'
					className={ style.kofi }
					target='_blank'
					rel='noreferrer noopener'
				>
					<Image
						src={ kofiSymbol }
						alt=''
						width={ 45 }
					/>
					<b>{ dict.pages['support-me']['button-kofi'] }</b>
				</Link>
				<Link
					href='https://www.paypal.com/donate/?hosted_button_id=3JHSMUXWCY7FY'
					className={[ style.paypal ].join(' ')}
					target='_blank'
					rel='noreferrer noopener'
				>
					<Image
						src={ paypalSymbol }
						alt=''
						height={ 34 }
					/>
					<b>{ dict.pages['support-me']['button-paypal'] }</b>
				</Link>
			</div>
		</main>
	);
}
