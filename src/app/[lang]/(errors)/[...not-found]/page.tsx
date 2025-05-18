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

import HTTPError from '@/components/HTTPError';

import alexLost from '@/assets/svg/alex-skunk/lost.svg';
import { getDictionary } from '@/app/dictionaries';


export default async function HTTP404({
	params,
}: {
	params: Promise<{ lang: Localizations }>
})
{
	const lang = (await params).lang;
	const dict = await getDictionary(lang);

	const phrases = dict.errors['not-found'].phrases;

	const phrase = phrases[Math.floor(Math.random() * phrases.length)];

	return (
		<HTTPError
			title={ '404' }
			description={ phrase }
			alexImage={ alexLost }
		/>
	);
}
