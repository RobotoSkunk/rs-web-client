
import { Metadata } from 'next';
import HTTPError from '@/components/HTTPError';

import alexLost from '@/assets/svg/alex-skunk/lost.svg';


export const metadata: Metadata = {
	title: 'Error 404 (Not Found)'
};


export default function HTTP404()
{
	return (
		<HTTPError
			title={ '404' }
			description={ 'Are you lost?' }
			alexImage={ alexLost }
		/>
	);
}
