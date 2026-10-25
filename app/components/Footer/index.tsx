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

'use server';

import {
	NavLink,
} from 'react-router';

import getLanguage from '@/data/languages';


export default function Footer({
	lang,
}: {
	lang: string;
})
{
	const i18n = getLanguage(lang).layout.footer;

	return (
		<footer>
			<div className='copyright'>
				<span>
					{ i18n.copyright({ year: new Date().getFullYear() }) }
					{ ' ' }
					<a
						href={ `https://github.com/RobotoSkunk/rs-web-client/commit/${GIT_COMMIT_HASH}` }
						target='_blank'
						rel='noreferrer noopener'
					>
						{ i18n.builtFrom({ hash: GIT_COMMIT_HASH.slice(0, 7) }) }
					</a>
				</span>
			</div>
			<div className='links'>
				<NavLink to={ `/${lang}/terms-of-use` }>{ i18n.terms }</NavLink>
				<NavLink to={ `/${lang}/privacy` }>{ i18n.privacy }</NavLink>
				<NavLink to={ `/${lang}/acknowledgements` }>{ i18n.acknowledgements }</NavLink>
				<NavLink to={ `/${lang}/open-source` }>{ i18n.openSource }</NavLink>
			</div>
		</footer>
	);
}
