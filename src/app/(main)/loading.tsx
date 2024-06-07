
import style from './loading.module.css';


export default function Page()
{
	return (
		<div className={ style.loading }>
			<span>Loading...</span>

			<div className={ style.bar }>
				<div></div>
			</div>
		</div>
	);
}
