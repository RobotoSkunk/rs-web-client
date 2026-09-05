/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2026  Edgar Lima (RobotoSkunk)
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

import {
	useEffect,
	useRef,
} from 'react';

import {
	motion,
} from 'motion/react';

import style from './background.module.css';


// Controls :D
const dotsSeparation = 12; // px
const waviness = 180; // px
const waveLength = 0.4; // decimals
const dotsAlpha = 0.14; // [0, 1]
const dotsRadius = 2; // px
const mouseLightRadius = 600; // px
const mouseLightStrength = 0.1; // [0, 1]


export default function Background()
{
	let disableRenderer = false;
	let animationId = -1;
	let prevTime = 0;
	let mouseLightDelta = 0;

	const mouse = {
		x: 0,
		y: 0,
		moveTime: 0,
	};

	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() =>
	{
		function render(time: DOMHighResTimeStamp)
		{
			if (disableRenderer) {
				return;
			}

			const canvas = canvasRef.current;
			if (!canvas) {
				window.requestAnimationFrame(render);
				return;
			}

			const context = canvas.getContext('2d');
			if (!context) {
				return;
			}

			const width = canvas.width = window.innerWidth;
			const height = canvas.height = window.innerHeight;

			context.clearRect(0, 0, width, height);

			let bgAlpha = time / 2000;

			if (bgAlpha > 1) {
				bgAlpha = 1;
			}


			const deltaTime = (time - prevTime) / 1000;
			prevTime = time;

			if (mouse.moveTime > 0) {
				mouse.moveTime -= deltaTime;

				mouseLightDelta += deltaTime;
			} else {
				mouseLightDelta -= deltaTime * 0.2;
			}

			if (mouseLightDelta < 0) {
				mouseLightDelta = 0;
			} else if (mouseLightDelta > 1) {
				mouseLightDelta = 1;
			}

			const rows = Math.ceil(height / dotsSeparation + waviness / 2);
			const columns = Math.ceil(width / dotsSeparation);

			for (let y = 0; y < rows; y++) {
				for (let x = 0; x < columns; x++) {
					let alpha = Math.floor(dotsAlpha * (y / (rows / 2)) * 0xff * bgAlpha);
					const delta = Math.sin((time + x * 100 + y * 70) * waveLength / 1000);

					const dotX = dotsRadius * 2 + x * dotsSeparation;
					const dotY = -waviness - dotsSeparation * 2 + y * dotsSeparation - (delta * waviness);

					if (
						dotX - dotsRadius > width ||
						dotY + dotsRadius < 0 ||
						dotY - dotsRadius > height
					) {
						continue;
					}

					const radius = mouseLightRadius * mouseLightDelta;
					const distanceToMouse = Math.sqrt(Math.pow(mouse.x - dotX, 2) + Math.pow(mouse.y - dotY, 2));

					if (distanceToMouse < radius) {
						const strength = mouseLightStrength * mouseLightDelta * bgAlpha;

						if (radius > 0) {
							alpha += Math.floor(strength * (1 - distanceToMouse / radius) * 0xff);
						}
					}

					context.fillStyle = `#ffffff${alpha.toString(16).padStart(2, '0')}`;
					context.beginPath();
					context.ellipse(dotX, dotY, dotsRadius, dotsRadius, 0, 0, 360);
					context.fill();
				}
			}

			animationId = window.requestAnimationFrame(render);
		}

		animationId = window.requestAnimationFrame(render);

		function getMousePosition(ev: MouseEvent)
		{
			mouse.x = ev.screenX;
			mouse.y = ev.screenY;
			mouse.moveTime = 0.1;
		}

		window.addEventListener('mousemove', getMousePosition);

		return () =>
		{
			disableRenderer = true;
			window.cancelAnimationFrame(animationId);
			window.removeEventListener('mousemove', getMousePosition);
		};
	}, [ ]);

	return (
		<motion.canvas
			className={ style.background }
			ref={ canvasRef }
		/>
	);
}
