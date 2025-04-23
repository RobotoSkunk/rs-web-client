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

import { useEffect } from 'react';

import HTTPError from '@/components/HTTPError';
import { useDictionary } from '@/components/providers/DictionaryProvider';

import alexDizzy from '@/assets/svg/alex-skunk/dizzy.svg';


function returnHome(lang: Localizations)
{
	location.href = `/${lang}`;
}

export default function NoScript({
	lang,
}: {
	lang: Localizations,
})
{
	const dict = useDictionary();

	useEffect(() => returnHome(lang), [ lang ]);

	return (
		<HTTPError
			title={ dict.errors.noscript.title }
			description={ dict.errors.noscript.description }
			alexImage={ alexDizzy }
		/>
	);
}
