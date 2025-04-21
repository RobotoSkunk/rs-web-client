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
import { RefObject, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Facebook from '@/components/icons/social/Facebook';
import Twitter from '@/components/icons/social/Twitter';
import Discord from '@/components/icons/social/Discord';
import Instagram from '@/components/icons/social/Instagram';
import YouTube from '@/components/icons/social/YouTube';
import GitHub from '@/components/icons/social/GitHub';
import Bluesky from '@/components/icons/social/Bluesky';
import Mastodon from '@/components/icons/social/Mastodon';
import Reddit from '@/components/icons/social/Reddit';


import logoImage from '@/assets/svg/logo_2024.svg';
import CopyIcon from '@/components/icons/CopyIcon';


export default function Root()
{
	const discordRef: RefObject<HTMLAnchorElement | null> = useRef(null);

	const copiedDivRef: RefObject<HTMLDivElement | null> = useRef(null);
	const resetPhraseTimeoutRef: RefObject<number | NodeJS.Timeout | null> = useRef(null);
	const removeDivTimeoutRef: RefObject<number | NodeJS.Timeout | null> = useRef(null);

	const [ copyCount, setCopyCount ] = useState(0);

	const copyPhrases = [
		'Copied!',
		'Double Copy!',
		'Triple Copy!',
		'Dominating!!',
		'Rampage!!',
		'Mega Copy!!',
		'Unstoppable!!',
		'Wicked Sick!!',
		'Monster Copy!!!',
		'GODLIKE!!!',
		'BEYOND GODLIKE!!!!',
	];

	function copyToClipboard(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>)
	{
		ev.preventDefault();

		navigator.clipboard.writeText('robotoskunk');

		var doShake = false;
		var shakeId: any;

		const div = document.createElement('div');
		const span = document.createElement('span');
		{
			div.classList.add(style['discord-popup'], style.copied);

			if (copyCount >= copyPhrases.length - 2) {
				div.classList.add(style.red);
				doShake = true;
			}

			span.innerText = copyPhrases[copyCount];
			div.appendChild(span);
		}


		discordRef.current?.appendChild(div);

		if (copyCount + 1 < copyPhrases.length) {
			setCopyCount(copyCount + 1);
		}

		if (doShake) {
			shakeId = setInterval(() =>
			{
				const x = Math.random() * (Math.random() > 0.5 ? 1 : -1) * 4;
				const y = Math.random() * (Math.random() > 0.5 ? 1 : -1) * 4;

				span.style.top = `${y}px`;
				span.style.left = `${x}px`;
			}, 16);
		}

		if (resetPhraseTimeoutRef.current) {
			clearTimeout(resetPhraseTimeoutRef.current);
		}

		resetPhraseTimeoutRef.current = setTimeout(() => setCopyCount(0), 2000);


		if (copiedDivRef.current) {
			if (removeDivTimeoutRef.current) {
				clearTimeout(removeDivTimeoutRef.current);
			}

			copiedDivRef.current.remove();
		}

		copiedDivRef.current = div;


		removeDivTimeoutRef.current = setTimeout(() =>
		{
			div.remove();

			if (doShake) {
				clearInterval(shakeId);
			}
		}, 1000);
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
			/>

			<h1>RobotoSkunk</h1>
			<h2>Edgar Lima</h2>
			<p>
				<TypeAnimation
					sequence={[ 'Computer Systems Engineer.' ]}
					speed={ 50 }
				>
				</TypeAnimation>
			</p>

			<div className='social-media'>
				<Link
					href='https://facebook.com/RobotoSkunk'
					title='Facebook'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Facebook/>
				</Link>
				<Link
					href='https://twitter.com/RobotoSkunk'
					title='Twitter'
					target='_blank'
					rel='noreferrer noopener'
				>
					<Twitter/>
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
					href='#'
					title='Discord'
					rel='button'
					ref={ discordRef }
					onClick={ ev => copyToClipboard(ev) }
				>
					<Discord/>

					<div className={ style['discord-popup'] }>
						<CopyIcon/>
						<span>@robotoskunk</span>
					</div>
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
					href='https://github.com/RobotoSkunk'
					title='GitHub'
					target='_blank'
					rel='noreferrer noopener'
				>
					<GitHub/>
				</Link>
			</div>
		</main>
	);
}
