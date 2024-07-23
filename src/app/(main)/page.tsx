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

'use client';

import Link from 'next/link';
import Image from 'next/image';
import style from './page.module.css';
import { TypeAnimation } from 'react-type-animation';

import Facebook from '@/components/icons/social/Facebook';
import Twitter from '@/components/icons/social/Twitter';
import Discord from '@/components/icons/social/Discord';
import Instagram from '@/components/icons/social/Instagram';
import YouTube from '@/components/icons/social/YouTube';
import GitHub from '@/components/icons/social/GitHub';
import Bluesky from '@/components/icons/social/Bluesky';


import logoImage from '@/assets/svg/logo_2024.svg';



export default function Root()
{
	return (
		<main className={ style.main }>
			<Image
				alt='Alex Skunk logo'
				src={ logoImage }
				width={ 200 }
				height={ 200 }
				className={ style.logo }
				draggable={ false }
			/>

			<h1>RobotoSkunk</h1>
			<h2>Edgar Lima</h2>
			<p>
				<TypeAnimation
					preRenderFirstString={ true }
					sequence={[
						2000,
						"I'm a Full Stack Developer.",
						2000,
						"I'm a Game Developer.",
						2000,
						"I'm a Linux Servers Maintainer.",
						2000,
						"I'm a Graphic Designer.",
						2000,
						"I'm a Cartoonist.",
					]}
					speed={ 50 }
					repeat={ Infinity }
				/>
			</p>

			<div className='social-media'>
				<Link
					href='https://facebook.com/RobotoSkunk'
					title='Facebook'
					className='facebook'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Facebook/>
				</Link>
				<Link
					href='https://twitter.com/RobotoSkunk'
					title='Twitter'
					className='twitter'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Twitter/>
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
					href='https://discord.gg/RT8uayccTt'
					title='Discord'
					className='discord'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Discord/>
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
					href='https://www.youtube.com/robotoskunk'
					title='YouTube'
					className='youtube'
					target='_blank'
					rel='noreferrer noopener'
				>
					<YouTube/>
				</Link>
				<Link
					href='https://github.com/RobotoSkunk'
					title='GitHub'
					className='generic'
					target='_blank'
					rel='noreferrer noopener'
				>
					<GitHub/>
				</Link>
			</div>
		</main>
	);
}
