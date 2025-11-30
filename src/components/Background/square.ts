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

export interface MouseData
{
	x: number;
	y: number;
	xDelta: number;
	yDelta: number;
}


export default class Square
{
	private top = 0;
	private left = 0;

	private moveDelta = 0;
	private rotationDelta = 0;

	private rotation = 0;
	private scale = 0;

	private element: HTMLDivElement;

	private __isAlive: boolean = true;


	constructor(startY?: number)
	{
		this.top = startY ?? window.innerHeight + 300;
		this.left = Math.random();

		this.moveDelta = 0.5 + Math.random() * 1;
		this.rotationDelta = Math.random() * 0.3 * Math.sign(Math.random() - 0.5);

		this.rotation = 0;
		this.scale = Math.random();

		// Create Div Element
		const element = document.createElement('div');
		document.getElementById('background')?.append(element);

		this.element = element;


		// Random scale and X position
		element.style.scale = '' + (1 + this.scale * 7);
	}

	public update(mouseData: MouseData, delta: number): void
	{
		const e = this.element;

		const relativeTop = (window.innerHeight - e.offsetTop) / window.innerHeight;
		const relativeLeft = this.left * window.innerWidth;

		// Properties calculation
		this.top -= this.moveDelta * delta;
		this.rotation -= this.rotationDelta * delta;

		// Position
		e.style.left = `${relativeLeft + mouseData.x * (0.5 + this.scale * 0.5)}px`;
		e.style.top = `${this.top + mouseData.y * (0.5 + this.scale * 0.5)}px`;

		// Appareance
		const opacity = (1 - relativeTop) * (0.5 + this.scale * 0.5);

		e.style.rotate = `${this.rotation}deg`;
		e.style.borderRadius = `${relativeTop * 10}px`;
		e.style.opacity = '' + opacity;

		// Delete on page top
		if (opacity <= 0.01) {
			e.remove();
			this.__isAlive = false;
		}
	}

	public get isAlive()
	{
		return this.__isAlive;
	}
}
