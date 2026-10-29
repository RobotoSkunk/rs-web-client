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
	useEffect,
	useRef,
	useState,
} from 'react';

import {
	NavLink,
} from 'react-router';

import {
	AnimatePresence,
	motion,
} from 'motion/react';

import getLanguage from '@/data/languages';

import flagMX from '@/assets/svg/flags/mx.svg';
import flagUS from '@/assets/svg/flags/us.svg';

import style from './footer.module.css';


const languages = [
	{
		value: 'es-MX',
		label: 'Español (México)',
		flag: flagMX,
	},
	{
		value: 'en-US',
		label: 'English (US)',
		flag: flagUS,
	},
];

export default function Footer({
	lang,
}: {
	lang: string;
})
{
	const i18n = getLanguage(lang).layout.footer;
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [ languagesOpen, setLanguageOpen ] = useState(false);

	function getCurrentLanguage()
	{
		return languages.find(l => l.value === lang);
	}

	useEffect(() =>
	{
		function clickedOutside(ev: MouseEvent)
		{
			if (dropdownRef.current && !dropdownRef.current.contains(ev.target as any)) {
				setLanguageOpen(false);
			}
		}

		document.addEventListener('mousedown', clickedOutside);

		return () =>
		{
			document.removeEventListener('mousedown', clickedOutside);
		};
	}, [ ]);

	return (
		<footer className={ style.footer }>
			<div className={ style.copyright }>
				<span style={{ position: 'relative' }}>
					<a
						className={ style['lang-link'] }
						href='#'
						onClick={ (ev) =>
						{
							ev.preventDefault();

							setLanguageOpen(!languagesOpen);
						} }
					>
						<img
							src={ getCurrentLanguage()?.flag }
							width={ 24 }
						/>
						{ getCurrentLanguage()?.label }
						<svg viewBox='0 0 18 18' width={ 18 } height={ 18 }>
							<line
								x1={ 1 }
								y1={ 12 }
								x2={ 9 }
								y2={ 6 }
								strokeWidth={ 1 }
								stroke='var(--foreground)'
								shapeRendering={ 'geometricPrecision' }
							/>
							<line
								x1={ 17 }
								y1={ 12 }
								x2={ 9 }
								y2={ 6 }
								strokeWidth={ 1 }
								stroke='var(--foreground)'
								shapeRendering={ 'geometricPrecision' }
							/>
						</svg>
					</a>
					<AnimatePresence>
						{ languagesOpen &&
							<motion.div
								ref={ dropdownRef }
								className={ style.dropdown }

								initial={{ height: 0 }}
								animate={{ height: 'fit-content' }}
								exit={{ height: 0 }}
							>
								{ languages.map((v, i) =>
								(
									<NavLink
										key={ i }
										to={ typeof location !== 'undefined' ? location.href.replace(lang, v.value) : `/${v.value}/` }
										onClick={ () => setLanguageOpen(false) }
										preventScrollReset
									>
										<img
											src={ v.flag }
											width={ 24 }
										/>
										{ v.label }
									</NavLink>
								)) }
							</motion.div>
						}
					</AnimatePresence>
				</span>
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
			<div className={ style.links }>
				<NavLink to={ `/${lang}/terms-of-use` }>{ i18n.terms }</NavLink>
				<NavLink to={ `/${lang}/privacy` }>{ i18n.privacy }</NavLink>
				<NavLink to={ `/${lang}/acknowledgements` }>{ i18n.acknowledgements }</NavLink>
				<NavLink to={ `/${lang}/open-source` }>{ i18n.openSource }</NavLink>
			</div>
		</footer>
	);
}
