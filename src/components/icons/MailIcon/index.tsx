/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import style from './mail.module.css';


export default function MailIcon()
{
	return (
		<svg className={ style['mail-icon'] } viewBox='0 0 150 100'>
			<path d='M75,48,148.65,8.83A15,15,0,0,0,135,0H15A15,15,0,0,0,1.35,8.83Z'></path>
			<path d='M75,60.07,0,19V85a15,15,0,0,0,15,15H135a15,15,0,0,0,15-15V19Z'></path>
		</svg>
	);
}
