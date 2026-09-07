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


function clamp(x: number, min: number, max: number)
{
	return x < min ? min : (x > max ? max : x);
}

function lerp(from: number, to: number, time: number)
{
	return (1 - time) * from + time * to;
}

export default function DottedImage({
	src,
	width,
	height,
	dotsMargin,
	dotsRadius,
	dotsColor,
}: {
	src: string;
	width: number;
	height: number;
	dotsMargin: number;
	dotsRadius: number;
	dotsColor: string | false;
})
{
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() =>
	{
		let disableRenderer = false;
		let animationId = 0;
		let prevTime = 0;

		let visible = false;
		let alpha = 0;

		const img = new Image();
		img.src = src;

		// [y][x] = 0xRRGGBBAA
		let imgData: {
			color: number;
			x: number;
			y: number;
			z: number;
			deltaX: number;
			deltaY: number;
			deltaZ: number;
		}[][] = [];

		let canvas = canvasRef.current;
		let context = canvas?.getContext('2d')!;

		function loadImage()
		{
			imgData = [];
			alpha = 0;

			let aspectRatio = img.height / img.width;

			if (canvas) {
				if (height <= width) {
					canvas.width = width + dotsMargin * 2;
					canvas.height = width * aspectRatio + dotsMargin * 2;
				} else {
					const invertedAspectRatio = img.width / img.height;

					canvas.width = height * invertedAspectRatio + dotsMargin * 2;
					canvas.height = height + dotsMargin * 2;
				}
			}

			const tmpCanvas = document.createElement('canvas');
			tmpCanvas.width = width / dotsMargin;
			tmpCanvas.height = (width * aspectRatio) / dotsMargin;
			checkVisibility();

			const tmpContext = tmpCanvas.getContext('2d')!;
			tmpContext.drawImage(img, 0, 0, tmpCanvas.width, tmpCanvas.height);

			for (let y = 0; y < tmpCanvas.height; y++) {
				imgData.push([]);

				for (let x = 0; x < tmpCanvas.width; x++) {
					const pixel = tmpContext.getImageData(x, y, 1, 1);

					let color = 0;
					color |= pixel.data[3] << 0;
					color |= pixel.data[2] << 8;
					color |= pixel.data[1] << 16;
					color |= pixel.data[0] << 24;

					imgData[y].push({
						color,
						x: (1 - Math.random() * 2) * dotsRadius * 2,
						y: (1 - Math.random() * 2) * dotsRadius * 2,
						z: 0,
						deltaX: Math.random() * dotsMargin / 2,
						deltaY: Math.random() * dotsMargin / 2,
						deltaZ: 0.1 + Math.random() * 0.9,
					});
				}
			}

			tmpCanvas.remove();
		}

		function render(time: DOMHighResTimeStamp)
		{
			if (disableRenderer) {
				return;
			}

			if (document.hidden || !visible) {
				animationId = window.requestAnimationFrame(render);
				return;
			}

			if (!canvas) {
				canvas = canvasRef.current;
				animationId = window.requestAnimationFrame(render);
				return;
			}

			if (!context) {
				context = canvas.getContext('2d')!;
				animationId = window.requestAnimationFrame(render);
				return;
			}

			context.clearRect(0, 0, canvas.width, canvas.height);

			const deltaTime = clamp((time - prevTime) / 1000, 0, 0.1);
			prevTime = time;

			if (imgData.length > 0) {
				alpha += deltaTime;

				if (alpha > 1) {
					alpha = 1;
				}
			}

			// context.fillStyle = '#ff0000';
			// context.fillRect(0, 0, canvas.width, canvas.height);

			// context.fillStyle = '#00ff00';
			// context.fillRect(dotsMargin, dotsMargin, canvas.width - dotsMargin * 2, canvas.height - dotsMargin * 2);

			if (dotsColor) {
				const a = Math.floor(0xff * alpha);

				context.fillStyle = dotsColor + a.toString(16).padStart(2, '0');
				context.beginPath();
			}

			for (let y = 0; y < imgData.length; y++) {
				for (let x = 0; x < imgData[y].length; x++) {
					const data = imgData[y][x];
					let color = data.color;

					const a = Math.floor(((color & 0xff) >>> 0) * alpha);
					if (a <= 0) {
						continue;
					}

					if (!dotsColor) {
						color &= ~(0xff);
						color |= a;
						color = color >>> 0; // Stupid padding to fix a dumbass JavaScript-only error
					}

					const deltaX = data.x + Math.cos((time * data.deltaX) / 1000);
					const deltaY = data.y + Math.sin((time * data.deltaY) / 1000);

					// if (data.z < 1) {
					// }
					data.z += Math.sin(1 - data.z) * deltaTime * data.deltaZ * 4;

					const xPos = dotsMargin + dotsRadius + lerp(canvas.width / 2, x * dotsMargin, data.z);
					const yPos = dotsMargin + dotsRadius + lerp(canvas.height / 2, y * dotsMargin, data.z);

					const dotX = clamp(
						xPos + deltaX / 2 * dotsMargin,
						dotsRadius,
						canvas.width - dotsRadius
					);
					const dotY = clamp(
						yPos + deltaY / 2 * dotsMargin,
						dotsRadius,
						canvas.height - dotsRadius
					);

					if (!dotsColor) {
						context.fillStyle = `#${color.toString(16).padStart(8, '0')}`;

						context.beginPath();
						context.arc(dotX, dotY, dotsRadius, 0, Math.PI * 2);
						context.fill();
					} else {
						context.moveTo(dotX, dotY);
						context.arc(dotX, dotY, dotsRadius, 0, Math.PI * 2);
					}
				}
			}

			context.closePath();
			context.fill();

			animationId = window.requestAnimationFrame(render);
		}

		function checkVisibility()
		{
			if (!canvas) {
				return;
			}

			const rect = canvas.getBoundingClientRect();

			visible =
				(rect.top >= 0 &&
				rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
				(rect.bottom >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
		}

		checkVisibility();

		animationId = window.requestAnimationFrame(render);
		img.addEventListener('load', loadImage);
		document.addEventListener('scroll', checkVisibility);

		return () =>
		{
			disableRenderer = true;
			window.cancelAnimationFrame(animationId);
			img.removeEventListener('load', loadImage);
			document.removeEventListener('scroll', checkVisibility);
		};
	}, [ src, width, dotsMargin, dotsRadius, dotsColor ]);


	return (
		<canvas
			width={ width + dotsMargin * 2 }
			height={ height + dotsMargin * 2 }
			ref={ canvasRef }
		/>
	);
}
