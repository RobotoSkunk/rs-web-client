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

'use client'

import { createContext, useContext } from 'react';

import { getDictionary } from '@/app/dictionaries';


type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const DictionaryContext = createContext<Dictionary | null>(null);


export default function DictionaryProvider({
	dictionary,
	children,
}: {
	dictionary: Dictionary
	children: React.ReactNode
})
{
	return (
		<DictionaryContext.Provider value={dictionary}>
			{ children }
		</DictionaryContext.Provider>
	);
}

export function useDictionary()
{
	const dictionary = useContext(DictionaryContext);

	if (dictionary === null) {
		throw new Error('useDictionary hook must be used within DictionaryProvider');
	}

	return dictionary;
}
