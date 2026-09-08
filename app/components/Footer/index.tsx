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


export default function Footer({
	lang,
}: {
	lang: string;
})
{
	return (
		<footer>
			<div className='copyright'>
				<span>
					© Copyright { new Date().getFullYear() } RobotoSkunk.
					{ ' ' }
					<a
						href={ `https://github.com/RobotoSkunk/rs-web-client/commit/${GIT_COMMIT_HASH}` }
						target='_blank'
						rel='noreferrer noopener'
					>
						Built from { GIT_COMMIT_HASH.slice(0, 7) }.
					</a>
				</span>
			</div>
			<div className='links'>
				<NavLink to={ `/${lang}/terms-of-use` }>Terms of Use</NavLink>
				<NavLink to={ `/${lang}/privacy` }>Privacy Policy</NavLink>
				<NavLink to={ `/${lang}/acknowledgements` }>Acknowledgements</NavLink>
				<NavLink to={ `/${lang}/open-source` }>Open Source</NavLink>
			</div>
		</footer>
	);
}
