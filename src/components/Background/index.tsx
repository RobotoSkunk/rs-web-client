/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2024  Edgar Lima (RobotoSkunk)
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

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import Square, { MouseData } from './square';


function lerp(from: number, to: number, delta: number)
{
	return from * delta + to * (1 - delta);
}

export default function Background()
{
	let squares: Square[] = [];
	let lastTime: number = 0;

	const mouse: MouseData = {
		x: 0,
		y: 0,
		xDelta: 0,
		yDelta: 0,
	};

	function addSquare(startY?: number)
	{
		const square = new Square(startY);

		squares.push(square);
	}


	useEffect(() =>
	{
		const mouseMoveEvent = (ev: MouseEvent) =>
		{
			mouse.xDelta = ev.clientX / window.innerHeight * 20;
			mouse.yDelta = ev.clientY / window.innerHeight * 20;
		};
		const deviceOrientationEvent = (ev: DeviceOrientationEvent) =>
		{
			var x = ev.gamma ?? 0;
			var y = ev.beta ?? 0;

			// Clamp Y between -90 and 90
			if (y > 90) {
				y = 90;
			}

			if (y < -90) {
				y = -90;
			}

			// Shift ranges to [0, 180]
			x += 90;
			y += 90;

			// Shift values based on orientation
			const angle = screen.orientation.angle;
			var xDelta = 0;
			var yDelta = 0;


			if (angle >= 270) {
				xDelta = 180 - y;
				yDelta = x;

			} else if (angle >= 180) {
				xDelta = x;
				yDelta = 180 - y;

			} else if (angle >= 90) {
				xDelta = y;
				yDelta = 180 - x;

			} else {
				xDelta = x;
				yDelta = y;
			}


			mouse.xDelta = xDelta / 180 * 150;
			mouse.yDelta = yDelta / 180 * 150;
		};

		// Mouse positon or device orientation
		if (document.body.getAttribute('device-type') !== 'mobile') {
			document.addEventListener('mousemove', mouseMoveEvent);
		} else {
			window.addEventListener('deviceorientation', deviceOrientationEvent);
		}


		// Main loop
		const step = (currentTime: number) =>
		{
			if (document.hidden) {
				window.requestAnimationFrame(step);
				lastTime = currentTime;
				return;
			}

			const delta = (currentTime - lastTime) / 1000;
			lastTime = currentTime;

			mouse.x = lerp(mouse.x, mouse.xDelta, 0.8 * (delta / (1 / 60)));
			mouse.y = lerp(mouse.y, mouse.yDelta, 0.8 * (delta / (1 / 60)));

			// Update squares
			for (const square of squares) {
				square.update(mouse, delta * 60.0);
			}

			squares = squares.filter((v) => v.isAlive);
			window.requestAnimationFrame(step);
		};

		window.requestAnimationFrame(step);


		// Start squares loop
		setInterval(() =>
		{
			if (document.hidden) {
				return;
			}

			addSquare();
		}, 3000);


		// Pre-spawn some squares at once
		var maxSquares = 5 + Math.floor(Math.random() * 5);

		for (var i = 0; i < maxSquares; i++) {
			addSquare(window.innerHeight / 2 + Math.random() * window.innerHeight);
		}


		return () =>
		{
			if (document.body.getAttribute('device-type') !== 'mobile') {
				document.removeEventListener('mousemove', mouseMoveEvent);
			} else {
				window.removeEventListener('deviceorientation', deviceOrientationEvent);
			}
		};
	}, [ ]);

	return (
		<motion.div
			id='background'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		/>
	);
}
