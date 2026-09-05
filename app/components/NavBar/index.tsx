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
	NavLink,
	useLocation,
} from 'react-router';

import {
	AnimatePresence,
	motion,
} from 'motion/react';

import {
	useEffect,
	useState,
} from 'react';


export default function NavBar()
{
	const location = useLocation();
	const [ lang, setLang ] = useState('es-MX');
	const [ pathname, setPathname ] = useState('/');

	useEffect(() =>
	{
		const pathParts = location.pathname.split('/').filter(v => v.length > 0);

		setLang(pathParts.shift() ?? 'es-MX');
		setPathname('/' + pathParts.join('/'));
	}, [ location ]);

	function NavLinkButton({
		path,
		children,
	}: {
		path?: string;
		children: React.ReactNode;
	})
	{
		return (
			<motion.span
				className='link'
				whileHover={{
					x: 10,
				}}

				key={ `navlink-${path}` }
				layout
			>
				<NavLink to={ `/${lang}/${path ?? ''}` }>
					{ children }
				</NavLink>
			</motion.span>
		);
	}

	return (
		<nav>
			<AnimatePresence mode='popLayout'>
				{ pathname != '/' && <NavLinkButton>Home</NavLinkButton> }
				<NavLinkButton path='portfolio'>Blog</NavLinkButton>
				<NavLinkButton path='portfolio'>Portfolio</NavLinkButton>
				<NavLinkButton path='illustrations'>Illustrations</NavLinkButton>
				<NavLinkButton path='contact'>Contact</NavLinkButton>
			</AnimatePresence>
		</nav>
	);
}
