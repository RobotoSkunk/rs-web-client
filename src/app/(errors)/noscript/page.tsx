/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

import { Metadata } from 'next';

import NoScript from './page.component';


export const metadata: Metadata = {
	title: 'Disabled JavaScript'
};


export default function Page()
{
	return (
		<NoScript/>
	);
}
