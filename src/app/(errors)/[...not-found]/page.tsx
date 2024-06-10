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
