
import { Metadata } from 'next';
import HTTPError from '@/components/HTTPError';

import alexLost from '@/assets/svg/alex-skunk/lost.svg';


export const metadata: Metadata = {
	title: 'Error 404 (Not Found)'
};


export default function HTTP404()
{
	const phrases = [
		'What you are looking for was not found.',
		'Are you lost?',
		"That page doesn't exists.",
		'What? What was you doing?',
		'Page lost.',
		"The page you though exists... doesn't.",
		'I think you know what 404 means...',
		'Uhhhh......',
		'What are you looking for?',
		'Do you want another map?',
		'I think your map is upside down.',
	];

	const phrase = phrases[Math.floor(Math.random() * phrases.length)];

	return (
		<HTTPError
			title={ '404' }
			description={ phrase }
			alexImage={ alexLost }
		/>
	);
}
