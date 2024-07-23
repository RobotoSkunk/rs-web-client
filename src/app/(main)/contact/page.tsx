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
import style from './page.module.css';
import Discord from '@/components/icons/social/Discord';
import Instagram from '@/components/icons/social/Instagram';
import Messenger from '@/components/icons/social/Messenger';
import Telegram from '@/components/icons/social/Telegram/intex';
import Reddit from '@/components/icons/social/Reddit';
import MailIcon from '@/components/icons/MailIcon';
import LinkedIn from '@/components/icons/social/LinkedIn';
import Bluesky from '@/components/icons/social/Bluesky';


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
				<h2>Social Media</h2>
				<p>You can find me on my social media. Ordered from the fastest to the slowest I respond.</p>
				<div className='social-media'>
					<Link
						href='https://m.me/RobotoSkunk'
						title='Telegram'
						className='telegram'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Telegram/>
					</Link>
					<Link
						href='https://discord.gg/RT8uayccTt'
						title='Discord'
						className='discord'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Discord/>
					</Link>
					<Link
						href='https://bsky.app/profile/robotoskunk.com'
						title='Bluesky'
						className='bluesky'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Bluesky/>
					</Link>
					<Link
						href='https://linkedin.com/in/RobotoSkunk'
						title='LinkedIn'
						className='linkedin'
						target='_blank'
						rel='noreferrer noopener'
					>
						<LinkedIn/>
					</Link>
					<Link
						href='https://m.me/RobotoSkunk'
						title='Messenger'
						className='facebook'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Messenger/>
					</Link>
					<Link
						href='https://instagram.com/RobotoSkunk'
						title='Instagram'
						className='generic'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Instagram/>
					</Link>
					<Link
						href='https://www.reddit.com/user/RobotoSkunk_'
						title='Reddit'
						className='reddit'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Reddit/>
					</Link>
				</div>
			</section>
		</main>
	);
}
