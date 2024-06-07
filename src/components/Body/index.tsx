'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';


export default function Body({
	children,
}: Readonly<{
	children: React.ReactNode,
}>)
{
	return (
		<AnimatePresence
			initial={ false }
			mode='wait'
		>
			{ children }
		</AnimatePresence>
	);
}

