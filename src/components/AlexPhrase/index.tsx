/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

'use client';

import { useEffect } from 'react';

import phrases from '@/data/phrases';


function alexTalk(message: string)
{
	console.log(
		`%cAlex Skunk: %c${message}`,
		'color: #c3e629; font-size: 15px',
		'color: #dddddd; font-size: 15px; font-weight: bold'
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
