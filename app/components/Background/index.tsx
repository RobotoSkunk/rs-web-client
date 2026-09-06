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

import style from './background.module.css';


// Controls :D
const dotsSeparation = 12; // px
const waviness = 180; // px
const waveLength = 0.4; // decimals
const dotsAlpha = 0.14; // [0, 1]
const dotsRadius = 1.5; // px
const mouseEffectRadius = 600; // px
const mouseEffectStrength = 0.08; // [0, 1]
const mouseEffectMoveStrength = 120; // px


export default function Background()
{
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() =>
	{
		let disableRenderer = false;
		let animationId = -1;
		let prevTime = 0;

		const cursors: {
			x: number;
			y: number;
			moveTime: number;
			effectDelta: number;
			isTouch: boolean;
		}[] = [];

		let canvas = canvasRef.current;
		let context = canvas?.getContext('2d');

		function render(time: DOMHighResTimeStamp)
		{
			if (disableRenderer) {
				return;
			}

			if (document.hidden) {
				window.requestAnimationFrame(render);
				prevTime = time;
				return;
			}

			if (!canvas) {
				canvas = canvasRef.current;
				window.requestAnimationFrame(render);
				return;
			}

			if (!context) {
				context = canvas?.getContext('2d');
				window.requestAnimationFrame(render);
				return;
			}

			if (canvas.width != window.innerWidth || canvas.height != window.innerHeight) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}

			const width = canvas.width;
			const height = canvas.height;

			context.clearRect(0, 0, width, height);

			let bgAlpha = time / 2000;

			if (bgAlpha > 1) {
				bgAlpha = 1;
			}


			const deltaTime = (time - prevTime) / 1000;
			prevTime = time;

			for (let i = 0; i < cursors.length; i++) {
				const cursor = cursors[i];

				if (cursor.moveTime > 0) {
					cursor.moveTime -= deltaTime;

					cursor.effectDelta += deltaTime;
				} else {
					if (cursor.isTouch) {
						cursor.effectDelta -= deltaTime * 0.6;
					} else {
						cursor.effectDelta -= deltaTime * 0.2;
					}
				}

				if (cursor.effectDelta < 0) {
					cursor.effectDelta = 0;
				} else if (cursor.effectDelta > 1) {
					cursor.effectDelta = 1;
				}

				if (cursor.isTouch && cursor.moveTime <= 0 && cursor.effectDelta <= 0) {
					cursors.splice(i, 1);
					i--;
				}
			}

			const rows = Math.ceil(height / dotsSeparation + waviness / 2);
			const columns = Math.ceil(width / dotsSeparation);

			for (let y = 0; y < rows; y++) {
				for (let x = 0; x < columns; x++) {
					const rawAlpha = Math.floor(dotsAlpha * (y / (rows / 2)) * 0xff * bgAlpha);
					const delta = Math.sin((time + x * 100 + y * 70) * waveLength / 1000);

					let alpha = rawAlpha;
					let dotX = dotsRadius * 2 + x * dotsSeparation;
					let dotY = -waviness - dotsSeparation * 2 + y * dotsSeparation - (delta * waviness);

					if (
						dotX - dotsRadius > width ||
						dotY + dotsRadius < 0 ||
						dotY - dotsRadius > height
					) {
						continue;
					}

					for (const cursor of cursors) {
						const radiusAlpha = mouseEffectRadius * cursor.effectDelta;
						const radiusMove = mouseEffectMoveStrength * cursor.effectDelta;

						const x = cursor.x - dotX;
						const y = cursor.y - dotY;
						const distanceToMouse = x * x + y * y;

						if (distanceToMouse < radiusAlpha * radiusAlpha) {
							const strength = mouseEffectStrength * cursor.effectDelta * bgAlpha;
							const strengthDelta = 1 - distanceToMouse / (radiusAlpha * radiusAlpha);

							if (radiusAlpha > 0) {
								alpha = rawAlpha + Math.floor(strength * strengthDelta * 0xff);
							}
						}

						if (distanceToMouse < radiusMove * radiusMove) {
							const strengthDelta = 1 - Math.sqrt(distanceToMouse) / radiusMove;

							const rotationToCursor = Math.atan2(cursor.y - dotY, cursor.x - dotX);
							const dirX = Math.sin(rotationToCursor + time / 380) * mouseEffectMoveStrength * strengthDelta;
							const dirY = Math.cos(rotationToCursor + time / 380) * mouseEffectMoveStrength * strengthDelta;

							dotX += dirX;
							dotY += dirY;
						}
					}

					if (
						cursors.length > 0 &&
						(dotX + dotsRadius < 0 ||
						dotX - dotsRadius > width ||
						dotY + dotsRadius < 0 ||
						dotY - dotsRadius > height)
					) {
						continue;
					}

					context.fillStyle = `#ffffff${alpha.toString(16).padStart(2, '0')}`;
					context.beginPath();
					context.arc(dotX, dotY, dotsRadius, 0,  Math.PI * 2);
					context.fill();
				}
			}

			animationId = window.requestAnimationFrame(render);
		}

		animationId = window.requestAnimationFrame(render);

		function getMousePosition(ev: PointerEvent)
		{
			if (ev.pointerType === 'touch') {
				return;
			}

			if (cursors.length == 0) {
				cursors.push({
					x: 0,
					y: 0,
					moveTime: 0,
					effectDelta: 0,
					isTouch: false,
				});
			}

			cursors[0].x = ev.clientX;
			cursors[0].y = ev.clientY;
			cursors[0].moveTime = 0.7;
		}

		function setTouchPoints(ev: TouchEvent)
		{
			for (const touch of ev.touches) {
				cursors.push({
					x: touch.clientX,
					y: touch.clientY,
					moveTime: 1.5,
					effectDelta: 0,
					isTouch: true,
				});
			}
		}

		window.addEventListener('touchstart', setTouchPoints);
		window.addEventListener('pointermove', getMousePosition);

		return () =>
		{
			disableRenderer = true;
			window.cancelAnimationFrame(animationId);
			window.removeEventListener('pointermove', getMousePosition);
			window.removeEventListener('touchstart', setTouchPoints);
		};
	}, [ ]);

	return (
		<canvas
			className={ style.background }
			ref={ canvasRef }
		/>
	);
}
