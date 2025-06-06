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

import { useEffect } from 'react';

import phrases from '@/data/phrases';


function alexTalk(message: string)
{
	console.log(
		`%cAlex Skunk: %c${message}`,
		'color: #c3e629; font-size: 1.1em',
		'color: #dddddd; font-size: 1.1em; font-weight: bold'
	);
}

export default function AlexPhrase()
{
	useEffect(() =>
	{
		alexTalk(phrases[Math.floor(Math.random() * phrases.length)]);
	});

	return (<></>);
}
