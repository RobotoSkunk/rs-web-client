/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2026  Edgar Lima (RobotoSkunk)
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

import esMX from './es-MX';
import enUS from './en-US';

const languages = {
	'es-MX': esMX,
	'en-US': enUS,
};

export default function i18n(languageKey: string)
{
	if (!Object.keys(languages).includes(languageKey)) {
		throw new Error(`The requested language key '${languageKey}' is not supported.`);
	}

	return languages[languageKey as keyof typeof languages];
}
