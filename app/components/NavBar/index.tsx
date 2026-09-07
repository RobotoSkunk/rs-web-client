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

import style from './navbar.module.css';


const maxWidthMobile = 800; // px

const toggleLine1Y = 12;
const toggleLine3Y = 38;

function NavToggle({
	open,
	onClick,
}: {
	open: boolean,
	onClick: () => void,
})
{
	const [ focused, setFocused ] = useState(false);

	return (
		<motion.button
			className={ style.toggle }

			onHoverStart={ () => setFocused(true) }
			onHoverEnd={ () => setFocused(false) }

			onClick={ onClick }
		>
			<svg width={ 50 } height={ 50 } viewBox='0 0 50 50'>
				<motion.line
					x1={ 5 }
					y1={ toggleLine1Y }
					x2={ 45 }
					y2={ toggleLine1Y }
					strokeWidth={ 1 }
					stroke='#ffffff'
					shapeRendering={ open ? 'geometricPrecision' : 'crispEdges' }

					animate={{
						y2: open ? toggleLine3Y : toggleLine1Y,
					}}
				/>
				<motion.line
					x1={ 5 }
					y1={ 25 }
					x2={ 45 }
					y2={ 25 }
					strokeWidth={ 1 }
					stroke='#ffffff'
					shapeRendering='crispEdges'

					animate={{
						x1: open ? 25 : (focused ? 10 : 5),
						x2: open ? 25 : (focused ? 40 : 45),
						opacity: open ? 0 : 1,
					}}
				/>
				<motion.line
					x1={ 5 }
					y1={ toggleLine3Y }
					x2={ 45 }
					y2={ toggleLine3Y }
					strokeWidth={ 1 }
					stroke='#ffffff'
					shapeRendering={ open ? 'geometricPrecision' : 'crispEdges' }

					animate={{
						y2: open ? toggleLine1Y : toggleLine3Y,
					}}
				/>
			</svg>
		</motion.button>
	);
}

function NavLinkButton({
	lang,
	path,
	children,
}: {
	lang: string;
	path?: string;
	children: React.ReactNode;
})
{
	const [ focused, setFocused ] = useState(false);

	return (
		<motion.span
			className={ style.link }

			initial={{ x: -23, opacity: 0 }}
			animate={{ x: focused ? 10 : 0, opacity: 1 }}
			exit={{ x: -23, opacity: 0 }}

			whileHover={{ x: 10 }}
			whileTap={{ x: 10 }}
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

export default function NavBar()
{
	const location = useLocation();
	const [ lang, setLang ] = useState('es-MX');
	const [ pathname, setPathname ] = useState('/');
	const [ open, setOpen ] = useState(false);
	const [ smallScreen, setSmallScreen ] = useState(false);

	useEffect(() =>
	{
		const pathParts = location.pathname.split('/').filter(v => v.length > 0);

		setLang(pathParts.shift() ?? 'es-MX');
		setPathname('/' + pathParts.join('/'));

		function onScreenResize()
		{
			let isSmall = isWindowDefined() && window.innerWidth < maxWidthMobile;

			setSmallScreen(isSmall);

			if (!isSmall) {
				setOpen(false);
			}
		}

		window.addEventListener('resize', onScreenResize);
		onScreenResize();

		return () =>
		{
			window.removeEventListener('resize', onScreenResize);
		};
	}, [ location ]);

	function isWindowDefined()
	{
		return typeof window !== 'undefined';
	}

	return (
		<>
			<AnimatePresence mode='wait'>
				{ smallScreen && open &&
					<motion.div
						className={ style['navbar-background'] }

						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}

						key={ 'navbar-background' }
					>
						<div className={ style.grain }/>
					</motion.div>
				}
				{ (!smallScreen || open) &&
					<motion.nav
						className={ style.navbar }
						style={{ position: 'fixed' }}

						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}

						key='nav'
					>
						{ pathname != '/' &&
							<NavLinkButton lang={ lang }>Home</NavLinkButton>
						}
						<NavLinkButton lang={ lang } path='portfolio'>Blog</NavLinkButton>
						<NavLinkButton lang={ lang } path='portfolio'>Portfolio</NavLinkButton>
						<NavLinkButton lang={ lang } path='illustrations'>Illustrations</NavLinkButton>
						<NavLinkButton lang={ lang } path='contact'>Contact</NavLinkButton>
						<NavLinkButton lang={ lang } path='another'>another</NavLinkButton>
					</motion.nav>
				}
			</AnimatePresence>
			{ smallScreen &&
				<NavToggle
					open={ open }
					onClick={ () => setOpen(!open) }
				/>
			}
		</>
	);
}
