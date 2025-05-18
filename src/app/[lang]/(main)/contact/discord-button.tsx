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

'use client';

import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';

import style from './discord-button.module.css';
import { useDictionary } from '@/components/providers/DictionaryProvider';

import Discord from '@/components/icons/social/Discord';
import CopyIcon from '@/components/icons/CopyIcon';


export default function DiscordButton()
{
	const dict = useDictionary();

	const discordRef: RefObject<HTMLAnchorElement | null> = useRef(null);
	const discordTagRef: RefObject<HTMLDivElement | null> = useRef(null);

	const copiedDivRef: RefObject<HTMLDivElement | null> = useRef(null);
	const resetPhraseTimeoutRef: RefObject<number | NodeJS.Timeout | null> = useRef(null);
	const removeDivTimeoutRef: RefObject<number | NodeJS.Timeout | null> = useRef(null);

	const [ copyCount, setCopyCount ] = useState(0);

	const copyPhrases = dict['discord-copy-phrases'];

	function copyToClipboard(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>)
	{
		ev.preventDefault();

		if (copyCount == 0) {
			navigator.clipboard.writeText('robotoskunk');
		}

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

	function setTagPosition()
	{
		if (discordTagRef.current && discordRef.current) {
			const rect = discordRef.current.getBoundingClientRect();

			discordTagRef.current.style.left = `${rect.x + rect.width / 2}px`;
			discordTagRef.current.style.top = `${rect.y + rect.height / 2 + 35}px`;
		}
	}

	function showDiscordTag(toggle: boolean)
	{
		if (discordTagRef.current) {
			discordTagRef.current.classList.toggle(style.show, toggle);

			if (toggle) {
				setTagPosition();
			}
		}
	}

	useEffect(() =>
	{
		if (discordTagRef.current) {
			document.querySelector('body')?.appendChild(discordTagRef.current);
		}

		setTagPosition();

		window.addEventListener('resize', () => setTagPosition());
	}, []);


	return (
		<>
			<Link
				href='#'
				title='Discord'
				rel='button'
				ref={ discordRef }
				onClick={ ev => copyToClipboard(ev) }

				onMouseEnter={ () => showDiscordTag(true) }
				onFocus={ () => showDiscordTag(true) }
				onMouseLeave={ () => showDiscordTag(false) }
				onBlur={ () => showDiscordTag(false) }
			>
				<Discord/>
			</Link>

			<div className={ style['discord-popup'] } ref={ discordTagRef } style={{ fontSize: '1.2em' }}>
				<CopyIcon/>
				<span>@robotoskunk</span>
			</div>
		</>
	);
}
