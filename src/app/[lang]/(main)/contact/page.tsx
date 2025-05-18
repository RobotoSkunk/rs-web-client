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

'use client';

import Link from 'next/link';

import style from './page.module.css';

import Messenger from '@/components/icons/social/Messenger';
import Telegram from '@/components/icons/social/Telegram/intex';
import MailIcon from '@/components/icons/MailIcon';
import LinkedIn from '@/components/icons/social/LinkedIn';
import DiscordButton from './discord-button';
import { useDictionary } from '@/components/providers/DictionaryProvider';


export default function Page()
{
	const dict = useDictionary();

	return (
		<main className={ style.main }>
			<h1>{ dict.pages.contact.h1 }</h1>
			<p>{ dict.pages.contact.h1p }</p>

			<section>
				<h2>{ dict.pages.contact['h2-email'] }</h2>
				<p>{ dict.pages.contact['h2p-email'] }</p>
				<p>
					<Link
						href='mailto:contact@robotoskunk.com'
						className={
							[
								style.email,
								'button',
							].join(' ')
						}
					>
						<MailIcon/>
						contact@robotoskunk.com
					</Link>
				</p>
			</section>

			<section>
				<h2>{ dict.pages.contact['h2-socials'] }</h2>
				<p>{ dict.pages.contact['h2p-socials'] }</p>
				<div className='social-media'>
					<Link
						href='https://m.me/RobotoSkunk'
						title='Telegram'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Telegram/>
					</Link>
					<DiscordButton/>
					<Link
						href='https://linkedin.com/in/RobotoSkunk'
						title='LinkedIn'
						target='_blank'
						rel='noreferrer noopener'
					>
						<LinkedIn/>
					</Link>
					<Link
						href='https://m.me/RobotoSkunk'
						title='Messenger'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Messenger/>
					</Link>
				</div>
			</section>
		</main>
	);
}
