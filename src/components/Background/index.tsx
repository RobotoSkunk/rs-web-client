'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';



function lerp(from: number, to: number, delta: number)
{
	return from * delta + to * (1 - delta);
}


function moveSquare(square: HTMLDivElement)
{
	const properties = {
		top: window.innerHeight + 100,
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

function addSquare(){
	const square = document.createElement('div');

	moveSquare(square);

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
	}, 5000);

	addSquare();
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
