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


function moveSquare(square: HTMLDivElement, startY?: number)
{
	const properties = {
		top: startY ?? window.innerHeight + 100,
		left: Math.random(),

		moveDelta: 0.5 + Math.random() * 1,
		rotationDelta: Math.random() * 0.3 * Math.sign(Math.random() - 0.5),

		rotation: 0,
		scale: Math.random(),

		mouse: {
			x: 0,
			y: 0,
			xDelta: 0,
			yDelta: 0,
		}
	}

	// Random scale and X position
	square.style.scale = '' + (1 + properties.scale * 7);

	// Mouse positon
	document.addEventListener('mousemove', (ev) =>
	{
		properties.mouse.xDelta = ev.clientX / window.innerHeight * 20 * (0.5 + properties.scale * 0.5);
		properties.mouse.yDelta = ev.clientY / window.innerHeight * 20 * (0.5 + properties.scale * 0.5);
	});

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
		properties.mouse.x = lerp(properties.mouse.x, properties.mouse.xDelta, 0.8);
		properties.mouse.y = lerp(properties.mouse.y, properties.mouse.yDelta, 0.8);

		square.style.left = `${relativeLeft + properties.mouse.x}px`;
		square.style.top = `${properties.top + properties.mouse.y}px`;

		// Appareance
		square.style.rotate = `${properties.rotation}deg`;
		square.style.borderRadius = `${relativeTop * 10}px`;
		square.style.opacity = `${(1 - relativeTop) * (0.5 + properties.scale * 0.5)}`;

		// Delete on page top
		if (properties.top < 0) {
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

function createSquares()
{
	setInterval(() =>
	{
		if (document.hidden) {
			return;
		}
	
		addSquare();
	}, 4500);


	// Pre-spawn some squares at once
	var maxSquares = 2 + Math.floor(Math.random() * 4);

	for (var i = 0; i < maxSquares; i++) {
		addSquare(Math.random() * window.innerHeight);
	}
}


export default function Background()
{
	useEffect(createSquares, []);

	return (
		<motion.div
			id='background'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		/>
	);
}
