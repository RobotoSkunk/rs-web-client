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


import {
	useContext,
} from 'react';

import {
	Links,
	Meta,
	Scripts,
	ScrollRestoration,
} from 'react-router';

import {
	NonceContext,
} from './contexts/nonce';

import ANSISkunko from './components/ANSISkunko';


export default function Layout({
	children,
}: {
	children: React.ReactNode;
})
{
	const nonce = useContext(NonceContext);

	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta/>
				<Links nonce={ nonce }/>
			</head>
			<body>
				<header>Header</header>
				<div>
					{ children }
				</div>
				<footer>Footer</footer>

				<Scripts nonce={ nonce }/>
				<ScrollRestoration nonce={ nonce }/>
				<ANSISkunko/>
			</body>
		</html>
	);
}
