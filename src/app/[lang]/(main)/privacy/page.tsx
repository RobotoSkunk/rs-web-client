/*
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
 */

'use client';

import style from './page.module.css';

// import { useDictionary } from '@/components/providers/DictionaryProvider';

import PrivacyPolicy_ES_MX from '@/data/policies/privacy/privacy.es-MX.mdx';


export default function Page()
{
	// const dict = useDictionary();

	return (
		<main className={ style.main }>
			<PrivacyPolicy_ES_MX/>
		</main>
	);
}
