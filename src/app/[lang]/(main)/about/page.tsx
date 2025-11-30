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

import style from './page.module.css';

import profilePicture from '@/assets/img/profile-picture.webp';
import ExternalLink from '@/components/icons/ExternalLink';
import { getDictionary } from '@/app/dictionaries';
import { Metadata } from 'next';


export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: Localizations }>,
}): Promise<Metadata>
{
	const lang = (await params).lang;
	const dict = await getDictionary(lang);

	return {
		title: dict.pages.about.h1,
	};
}


export default async function Page({
	params,
}: {
	params: Promise<{ lang: Localizations }>,
})
{
	const dict = await getDictionary((await params).lang);

	return (
		<main className={ style.main }>
			<div className={ style.nutshell }>
				<h1>{ dict.pages.about.h1 }</h1>
				<div className={ style['who-i-am'] }>
					<div className={ style['picture-container'] }>
						<Image
							alt={ dict.pages.about['img-alt'] }
							src={ profilePicture }
							width={ 200 }
							className={ style['profile-picture'] }
							draggable={ false }

							priority={ true }
							fetchPriority='high'
						/>
						<span>
							{ dict.pages.about['img-span'] + ' ' }
							<Link
								href='https://x.com/SynieDraw/status/1699933375417528722'
								target='_blank'
								rel='noreferrer noopener'
							>
								@SynieDraw <ExternalLink/>
							</Link>
						</span>
					</div>
					<div className={ style.content }>
						<p dangerouslySetInnerHTML={{ __html: dict.pages.about['content-p1'] }}></p>
						<p dangerouslySetInnerHTML={{ __html: dict.pages.about['content-p2'] }}></p>
						<p dangerouslySetInnerHTML={{ __html: dict.pages.about['content-p3'] }}></p>
						<p dangerouslySetInnerHTML={{ __html: dict.pages.about['content-p4'] }}></p>
					</div>
				</div>
			</div>
		</main>
	);
}
