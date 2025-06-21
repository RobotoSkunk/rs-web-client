/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2025  Edgar Lima (RobotoSkunk)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
**/

'use client';

import { MotionConfig } from 'framer-motion';


// If I had a coin for each update Motion uploads and breaks everything without documentation about it...
export default function StupidMotionWorkaround({
	nonce,
	children,
}: {
	nonce: string;
	children: React.ReactNode;
})
{
	return (
		<MotionConfig nonce={ nonce }>
			{ children }
		</MotionConfig>
	);
}
