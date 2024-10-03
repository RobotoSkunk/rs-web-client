/*
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2024  Edgar Lima (RobotoSkunk)
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

import React, { useState } from 'react';

import articlesStyle from '../article.module.css';
import style from './dropdown.module.css';



export default function DropdownArticle({
	// children,
	// name,
	// id,
	// img,
	// isImage = false,
	// currentId,
	// setCurrentId,
}: Readonly<{
	// children?: React.ReactNode,
	// name: string,
	// id: string,
	// img: StaticImageData,
	// isImage?: boolean,
	// currentId: null|string,
	// setCurrentId(id: null|string): void,
}>)
{
	const [ open, setOpen ] = useState(false);

	return (
		<article
			className={
				[
					articlesStyle.article,
					style.dropdown,
					open ? style.open : '',
				].join(' ')
			}
		>
			<div className={articlesStyle.info}>
				<h3>Something here</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat justo ac congue aliquet.
					Vestibulum libero massa, condimentum eu facilisis ac, finibus ac felis.
				</p>
			</div>
			<button
				className={style.button}
				onClick={() => setOpen(!open)}
			>
				<div className={style.arrow}>
					<div></div>
					<div></div>
				</div>
			</button>
			<div className={style.content}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat justo ac congue aliquet.
					Vestibulum libero massa, condimentum eu facilisis ac, finibus ac felis.
				</p>
			</div>
		</article>
	);
}
