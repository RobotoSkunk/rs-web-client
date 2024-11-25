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

import Link from 'next/link';

import metadataBuilder from '@/utils/metadata-builder';


import style from './page.module.css';

import Newgrounds from '@/components/icons/social/Newgrounds';
import Instagram from '@/components/icons/social/Instagram';
import DeviantArt from '@/components/icons/social/DeviantArt';
import GitHub from '@/components/icons/social/GitHub';

import LinkedIn from '@/components/icons/social/LinkedIn';
import PortfolioContent from './portfolio-content';



export const metadata = metadataBuilder('Portfolio');



export default function Page()
{
	return (
		<main className={ style.main }>
			<h1>Portfolio</h1>
			<p className={ style.legend }>
				A few examples of some of my favorite projects and artworks I've made since I can remember.
			</p>

			<PortfolioContent/>

			<section>
				<h3>Want to see more?</h3>
				<p>Follow my projects!</p>
				<div className='social-media'>
					<Link
						href='https://linkedin.com/in/RobotoSkunk'
						title='LinkedIn'
						target='_blank'
						rel='noreferrer noopener'
					>
						<LinkedIn/>
					</Link>
					<Link
						href='https://www.deviantart.com/robotoskunk'
						title='DeviantArt'
						target='_blank'
						rel='noreferrer noopener'
					>
						<DeviantArt/>
					</Link>
					<Link
						href='https://robotoskunk.newgrounds.com/art'
						title='Newgrounds'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Newgrounds/>
					</Link>
					<Link
						href='https://www.instagram.com/RobotoSkunk'
						title='Instagram'
						target='_blank'
						rel='noreferrer noopener'
					>
						<Instagram/>
					</Link>
					<Link
						href='https://github.com/RobotoSkunk'
						title='GitHub'
						target='_blank'
						rel='noreferrer noopener'
					>
						<GitHub/>
					</Link>
				</div>
			</section>
		</main>
	);
}
