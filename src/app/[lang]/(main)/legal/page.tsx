/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2025  Edgar Lima (RobotoSkunk)
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

import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import style from './page.module.css';

import { getDictionary } from '@/app/dictionaries';

import alexImage from '@/assets/img/alex-legal.webp';


export async function generateMetadata(): Promise<Metadata>
{
	return {
		title: 'Legal',
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
		<main className={ style.main }>
			<h1>Legal</h1>

			<Image
				alt={ dict.pages.legal['img-alt'] }
				src={ alexImage }
				width={ 400 }
				placeholder='blur'

				priority={ true }
				fetchPriority='high'
			/>

			<p>
				<Link href={ `/${lang}/open-source` }>{ dict.pages.legal['open-source'] }</Link>
			</p>
			<p>
				<Link href={ `/${lang}/privacy` }>{ dict.pages.legal.privacy }</Link>
			</p>
		</main>
	);
}
