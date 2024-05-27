
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
