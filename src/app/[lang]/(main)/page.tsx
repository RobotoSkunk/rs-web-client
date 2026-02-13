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

import { RefObject, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

import style from './page.module.css';
import { useDictionary } from '@/components/providers/DictionaryProvider';

import Facebook from '@/components/icons/social/Facebook';
import Twitter from '@/components/icons/social/Twitter';
import Instagram from '@/components/icons/social/Instagram';
import YouTube from '@/components/icons/social/YouTube';
import GitHub from '@/components/icons/social/GitHub';
import Bluesky from '@/components/icons/social/Bluesky';
import Mastodon from '@/components/icons/social/Mastodon';
import Reddit from '@/components/icons/social/Reddit';
import Newgrounds from '@/components/icons/social/Newgrounds';
import DeviantArt from '@/components/icons/social/DeviantArt';
import LinkedIn from '@/components/icons/social/LinkedIn';

import logoImage from '@/assets/svg/logo_2024.svg';


export default function Root()
{
	const dict = useDictionary();

	const extraSocialsRef: RefObject<HTMLDivElement | null> = useRef(null);
	const extraSocialsContainerRef: RefObject<HTMLDivElement | null> = useRef(null);
	const buttonExtraSocialsRef: RefObject<HTMLButtonElement | null> = useRef(null);

	const [ extrasOpen, setExtrasOpen ] = useState(false);

	useEffect(() =>
	{
		window.addEventListener('resize', () =>
		{
			if (extrasOpen) {
				setExtrasHeight();
			}
		});
	}, []);

	function setExtrasHeight()
	{
		if (!extraSocialsRef.current) {
			return;
		}
		if (!extraSocialsContainerRef.current) {
			return;
		}

		const rect = extraSocialsRef.current?.getBoundingClientRect();

		extraSocialsContainerRef.current.style.height = `${rect.height}px`;
		extraSocialsContainerRef.current.style.visibility = 'visible';
	}

	function openExtras()
	{
		setExtrasOpen(true);
		setExtrasHeight();
	}


	return (
		<main className={ style.main }>
			<Image
				alt='Alex Skunk logo'
				src={ logoImage }
				width={ 200 }
				height={ 200 }
				className={ style.logo }
				draggable={ false }
				priority={ true }
				fetchPriority='high'
			/>

			<h1>RobotoSkunk</h1>
			<h2>Edgar Lima</h2>
			<p>
				<TypeAnimation
					sequence={[ dict.pages.home.degree ]}
					speed={ 50 }
				>
				</TypeAnimation>
			</p>

			<div className={
				[
					'social-media',
					style['socials-main'],
				].join(' ')
			}>
				<Link
					href='https://facebook.com/RobotoSkunk'
					title='Facebook'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Facebook/>
				</Link>
				<Link
					href='https://bsky.app/profile/robotoskunk.com'
					title='Bluesky'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Bluesky/>
				</Link>
				<Link
					href='https://instagram.com/RobotoSkunk'
					title='Instagram'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Instagram/>
				</Link>
				<Link
					href='https://www.youtube.com/robotoskunk'
					title='YouTube'
					target='_blank'
					rel='noreferrer noopener'
				>
					<YouTube/>
				</Link>
				<Link
					href='https://linkedin.com/in/edgaralexislima'
					title='LinkedIn'
					target='_blank'
					rel='noreferrer noopener'
				>
					<LinkedIn/>
				</Link>
				<Link
					href='https://github.com/RobotoSkunk'
					title='GitHub'
					target='_blank'
					rel='noreferrer noopener'
				>
					<GitHub/>
				</Link>
			</div>


			<button
				ref={ buttonExtraSocialsRef }
				aria-label={ dict.pages.home['show-more'] }
				onClick={ openExtras }
				className={[
					style['socials-showmore'],
					(extrasOpen ? style.closed : ''),
				].join(' ')}
				disabled={ extrasOpen }
			>
				<div className={ style.arrow }>
					<div></div>
					<div></div>
				</div>
			</button>

			<div ref={ extraSocialsContainerRef } className={ style['socials-extra-container'] }>
				<div
					ref={ extraSocialsRef }
					className={[
						'social-media',
						style['socials-extra'],
					].join(' ')}
				>
					<Link
						href='https://twitter.com/RobotoSkunk'
						title='Twitter'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Twitter/>
					</Link>
					<Link
							href='https://www.reddit.com/user/RobotoSkunk_'
							title='Reddit'
							target='_blank'
							rel='noreferrer noopener'
					>
						<Reddit/>
					</Link>
					<Link
						href='https://mastodon.social/@RobotoSkunk'
						title='Mastodon'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Mastodon/>
					</Link>

					<Link
						href='https://www.deviantart.com/robotoskunk'
						title='DeviantArt'
						target='_blank'
						rel='noreferrer noopener'
					>
						<DeviantArt/>
					</Link>
					<Link
						href='https://robotoskunk.newgrounds.com'
						title='Newgrounds'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Newgrounds/>
					</Link>
				</div>
			</div>
		</main>
	);
}
