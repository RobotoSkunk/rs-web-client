/*
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
 */

'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';



function lerp(from: number, to: number, delta: number)
{
	return from * delta + to * (1 - delta);
}


export default function Background()
{
	const mouse = {
		x: 0,
		y: 0,
		xDelta: 0,
		yDelta: 0,
	};


	function moveSquare(square: HTMLDivElement, startY?: number)
	{
		const properties = {
			top: startY ?? window.innerHeight + 300,
			left: Math.random(),

			moveDelta: 0.5 + Math.random() * 1,
			rotationDelta: Math.random() * 0.3 * Math.sign(Math.random() - 0.5),

			rotation: 0,
			scale: Math.random(),

			virtualPos: {
				x: 0,
				y: 0,
			},
		}

		// Random scale and X position
		square.style.scale = '' + (1 + properties.scale * 7);

		// Animation interval
		const intervalId = setInterval(() =>
		{
			if (document.hidden) {
				return;
			}

			const relativeTop = (window.innerHeight - square.offsetTop) / window.innerHeight;
			const relativeLeft = properties.left * window.innerWidth;

			// Properties calculation
			properties.top -= properties.moveDelta;
			properties.rotation -= properties.rotationDelta;

			// Position
			properties.virtualPos.x = lerp(properties.virtualPos.x, mouse.xDelta * (0.5 + properties.scale * 0.5), 0.8);
			properties.virtualPos.y = lerp(properties.virtualPos.y, mouse.yDelta * (0.5 + properties.scale * 0.5), 0.8);

			square.style.left = `${relativeLeft + mouse.x * (0.5 + properties.scale * 0.5)}px`;
			square.style.top = `${properties.top + mouse.y * (0.5 + properties.scale * 0.5)}px`;

			// Appareance
			const opacity = (1 - relativeTop) * (0.5 + properties.scale * 0.5);

			square.style.rotate = `${properties.rotation}deg`;
			square.style.borderRadius = `${relativeTop * 10}px`;
			square.style.opacity = '' + opacity;

			// Delete on page top
			if (opacity <= 0.01) {
				clearInterval(intervalId);
				square.remove();
			}
		}, 16);
	}

	function addSquare(startY?: number){
		const square = document.createElement('div');

		moveSquare(square, startY);

		document.getElementById('background')?.append(square);
	}


	function mainLoop()
	{
		// Mouse positon or device orientation
		if (document.body.getAttribute('device-type') !== 'mobile') {
			document.addEventListener('mousemove', (ev) =>
			{
				mouse.xDelta = ev.clientX / window.innerHeight * 20;
				mouse.yDelta = ev.clientY / window.innerHeight * 20;
			});
		} else {
			window.addEventListener('deviceorientation', (ev) =>
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
			});
		}


		// Start mouse delta position update
		setInterval(() =>
		{
			if (document.hidden) {
				return;
			}

			mouse.x = lerp(mouse.x, mouse.xDelta, 0.8);
			mouse.y = lerp(mouse.y, mouse.yDelta, 0.8);
		}, 16);


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
	}


	useEffect(mainLoop, []);

	return (
		<motion.div
			id='background'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		/>
	);
}
