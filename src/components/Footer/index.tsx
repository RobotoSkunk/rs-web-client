
export default function Footer()
{
	const year = new Date().getFullYear();

	return (
		<footer>
			<span>
				© Copyright {year} RobotoSkunk. All Rights Reserved.
			</span>
			<span>
				<a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
			</span>
		</footer>
	);
}
