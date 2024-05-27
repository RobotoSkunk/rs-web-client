
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
			/>
		</main>
	);
}
