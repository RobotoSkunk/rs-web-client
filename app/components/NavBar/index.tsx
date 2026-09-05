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
	stagger,
} from 'motion/react';

import type {
	Variants,
} from 'motion/react';

import {
	useEffect,
	useState,
} from 'react';


const linkVariants = {
	show: {
		x: 0,
		opacity: 1,
	},
	hide: {
		x: -23,
		opacity: 0,
	},
	focus: {
		x: 10,
		opacity: 1,
	},
} satisfies Variants;

const navVariants = {
	show: {
		transition: {
			delayChildren: stagger(0.1),
		},
	},
	hide: { },
} satisfies Variants;


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
		const [ focused, setFocused ] = useState(false);

		return (
			<motion.span
				className='link'

				whileHover='focus'
				whileTap='focus'

				initial='hide'
				animate={ focused ? 'focus' : 'show' }
				exit='hide'

				variants={ linkVariants }
				tabIndex={ -1 }

				key={ `navlink-${path?.replaceAll('/', '-')}` }
				layout
			>
				<NavLink
					to={ `/${lang}/${path ?? ''}` }
					onFocus={ (ev) => setFocused(ev.currentTarget.matches(':focus-visible')) }
					onBlur={ () => setFocused(false) }
				>
					{ children }
				</NavLink>
			</motion.span>
		);
	}

	return (
		<AnimatePresence mode='popLayout'>
			<motion.nav
				variants={{ navVariants }}

				initial='hide'
				animate='show'
				exit='hide'

				key='nav'
			>
				{ pathname != '/' && <NavLinkButton>Home</NavLinkButton> }
				<NavLinkButton path='portfolio'>Blog</NavLinkButton>
				<NavLinkButton path='portfolio'>Portfolio</NavLinkButton>
				<NavLinkButton path='illustrations'>Illustrations</NavLinkButton>
				<NavLinkButton path='contact'>Contact</NavLinkButton>
				<NavLinkButton path='another'>another</NavLinkButton>
			</motion.nav>
		</AnimatePresence>
	);
}
