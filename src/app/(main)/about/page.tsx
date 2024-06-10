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
import Image from 'next/image';

import style from './page.module.css';

import profilePicture from '@/assets/img/profile-picture.webp';
import alexReferencePicture from '@/assets/img/alex-skunk-ref2021.webp';
import ExternalLink from '@/components/icons/ExternalLink';


export default function Page()
{
	return (
		<main className={ style.main }>
			<div className={ style.nutshell }>
				<h1>About me</h1>
				<div className={ style['who-i-am'] }>
					<div className={ style['picture-container'] }>
						<Image
							alt='Alex Skunk licking a bubble.'
							src={ profilePicture }
							width={ 200 }
							className={ style['profile-picture'] }
							draggable={ false }
						/>
						<span>
							Drawn by{ ' ' }
							<Link
								href='https://x.com/SynieDraw/status/1699933375417528722'
								target='_blank'
								rel='noreferrer noopener'
							>
								@SynieDraw <ExternalLink/>
							</Link>
						</span>
					</div>
					<div className={ style.content }>
						<p>
							My name is <b>Edgar Lima</b>, I'm a 22-year-old Mexican autodidact Full Stack developer,
							graphic designer, cartoonist, Linux Servers maintainer and game developer.
						</p>
						<p>
							I've been coding non-stop since 2018, mainly focused on my own side projects because I wanted
							to make games and have a servers infrastructure like Google's when I was younger.
						</p>
					</div>
				</div>
			</div>

			<section>
				<h2>My Avatar</h2>
				<p>
					Since I didn't want to show my face on the Internet, and just for fun, I created an avatar
					(or fursona) called Alex Skunk. Originally it was meant to be a mascot, but I liked it a lot and
					decided to use it as my avatar instead.
				</p>

				<div className={ style['alex-ref'] }>
					<Image
						src={ alexReferencePicture }
						alt="Alex Skunk's reference sheet 2021"
						width={ 800 }
						sizes='100%'
						style={{
							width: '100%',
							height: 'auto',
						}}
						draggable={ false }
					/>
					<p>
						<Link href='/assets/img/alex-skunk-ref2021.png'>Download Original PNG</Link>
					</p>
				</div>

				<p>
					He was created on January 7, 2017.
				</p>
			</section>
		</main>
	);
}
