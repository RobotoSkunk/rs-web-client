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

import metadataBuilder from '@/utils/metadata-builder';

import style from './page.module.css';

import profilePicture from '@/assets/img/profile-picture.webp';
import alexReferencePicture from '@/assets/img/alex-skunk-ref2021.webp';
import ExternalLink from '@/components/icons/ExternalLink';


export const metadata = metadataBuilder('About me');


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
							My name is <b>Edgar Lima</b>, I'm a 23-year-old Mexican computer systems engineer.
							Graduated from the Instituto Tecnológico Superior de Poza Rica in the state of Veracruz
							in 2024.
						</p>
						<p>
							I have strong knowledge of object-oriented programming languages, among them C++, C#, Java,
							TypeScript, PHP and also HTML and CSS. I also worked with some frameworks like
							React.js/Next.js, Kysely, Electron, Discord.js and Express.js.
						</p>
						<p>
							I have experience with Linux-based operating systems, and I've worked in the installation of
							WRF-Chem and CMAQ in a Linux server for a grant-winning project for the government of
							Veracruz.
						</p>
						<p>
							I also developed a couple simple games with Unity, Game Maker and Godot.NET in my free time.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
