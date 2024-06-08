/* 
 * Copyright (c) 2024 Edgar Lima (RobotoSkunk) - All Rights Reserved.
 */

'use client';

import { AnimatePresence, motion } from 'framer-motion';


export default function Template({
	children
}: {
	children: React.ReactNode
})
{
	return (
		// <AnimatePresence
		// 	initial={ false }
		// 	mode='wait'
		// >
			<motion.div
				initial={{ y: 40, opacity: 0 }}
				animate={{ y:  0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.75 }}
			>
				{ children }
			</motion.div>
		// </AnimatePresence>
	);
}
