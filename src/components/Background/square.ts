
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

	public update(mouseData: MouseData): void
	{
		const e = this.element;

		const relativeTop = (window.innerHeight - e.offsetTop) / window.innerHeight;
		const relativeLeft = this.left * window.innerWidth;

		// Properties calculation
		this.top -= this.moveDelta;
		this.rotation -= this.rotationDelta;

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


