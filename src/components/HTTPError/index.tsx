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

import Image from 'next/image';

interface HTTPErrorOptions
{
	title: string;
	description: string;
	alexImage: any;
}


export default function HTTPError({
	title,
	description,
	alexImage,
}: HTTPErrorOptions)
{
	return (
		<main>
			<div className='msg-content'>
				<h1>{ title }</h1>
				<p>{ description }</p>
			</div>
			<Image
				alt={ 'Alex lost with a map' }
				src={ alexImage }
				draggable={ false }

				height={ 250 }

				priority={ true }
				fetchPriority='high'
			/>
		</main>
	);
}
