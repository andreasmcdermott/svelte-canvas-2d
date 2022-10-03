import { globals } from '$lib/globals';

export class Entity {
	canvas: HTMLCanvasElement;
	context2d: CanvasRenderingContext2D;
	x: number;
	y: number;

	constructor({
		x = 0,
		y = 0
	}: {
		x?: number;
		y?: number;
	} = {}) {
		const { canvas, context2d } = globals;
		this.canvas = canvas;
		this.context2d = context2d;
		this.x = x;
		this.y = y;
	}
	draw() {}
}
