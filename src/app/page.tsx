
import Image from 'next/image';
import style from '../styles/index.module.css';

import Facebook from '@/components/icons/social/Facebook';
import Twitter from '@/components/icons/social/Twitter';
import Discord from '@/components/icons/social/Discord';
import Instagram from '@/components/icons/social/Instagram';
import YouTube from '@/components/icons/social/YouTube';
import GitHub from '@/components/icons/social/GitHub';


export default function Root()
{
	return (
		<main className={style.main}>
			<Image
				alt='Alex Skunk logo'
				src='/assets/svg/logo_2020.svg'
				width={200}
				height={200}
				className={style.logo}
			/>

			<h1 className={style.h1}>RobotoSkunk</h1>
			<h2 className={style.h2}>Edgar Lima</h2>
			<p className={style.p}>Full Stack developer, game developer, Linux servers maintainer and designer</p>

			<div className={style.social_media}>
				<a
					href="https://facebook.com/RobotoSkunk"
					title="Facebook"
					className={style.facebook}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Facebook/>
				</a>
				<a
					href="https://twitter.com/RobotoSkunk"
					title="Twitter"
					className={style.twitter}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Twitter/>
				</a>
				<a
					href="https://discord.gg/RT8uayccTt"
					title="Discord"
					className={style.discord}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Discord/>
				</a>
				<a
					href="https://instagram.com/RobotoSkunk"
					title="Instagram"
					className={style.generic}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Instagram/>
				</a>
				<a
					href="https://www.youtube.com/robotoskunk"
					title="YouTube"
					className={style.youtube}
					target="_blank"
					rel="noreferrer noopener"
				>
					<YouTube/>
				</a>
				<a
					href="https://github.com/RobotoSkunk"
					title="GitHub"
					className={style.generic}
					target="_blank"
					rel="noreferrer noopener"
				>
					<GitHub/>
				</a>
			</div>
		</main>
	);
}
