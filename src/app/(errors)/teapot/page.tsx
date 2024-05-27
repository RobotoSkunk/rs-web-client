
import { Metadata } from 'next';

import HTTPError from '@/components/HTTPError';

import alexTeapot from '@/../public/assets/svg/alex-skunk/teapot.svg';


export const metadata: Metadata = {
	title: "Error 418 (I'm a Teapot) n.n"
};


export default function HTTP418()
{
	return (
		<HTTPError
			title={ '418' }
			description={ "I won't try to make coffee, I'm a teapot!" }
			alexImage={ alexTeapot }
		/>
	);
}
