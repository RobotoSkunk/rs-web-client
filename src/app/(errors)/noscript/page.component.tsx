'use client';

import { useEffect } from 'react';

import HTTPError from '@/components/HTTPError';

import alexDizzy from '@/../public/assets/svg/alex-skunk/dizzy.svg';


function returnHome()
{
	location.href = '/';
}

export default function NoScript()
{
	useEffect(returnHome, []);

	return (
		<HTTPError
			title={ 'JavaScript is not enabled' }
			description={ 'Please enable JavaScript to view this website.' }
			alexImage={ alexDizzy }
		/>
	);
}
