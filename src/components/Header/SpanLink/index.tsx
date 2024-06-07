
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function SpanLink({
	children,
	href,
	delay,
}: Readonly<{
	children: React.ReactNode,
	href: string,
	delay: number,
}>)
{
	return (
		<motion.span
			initial={{
				y: -10,
				opacity: 0,
			}}

			animate={{
				y: 0,
				opacity: 1,
			}}

			transition={{
				duration: 0.5,
				delay,
			}}
		>
			<Link href={ href }>
				{ children }
			</Link>
		</motion.span>
	);
};
