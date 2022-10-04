import { Entity } from '$lib/entities/entity';
import { globals } from '$lib/globals';

export class Rect extends Entity {
	w: number;
	h: number;
	fillStyle: string;

	constructor({
		x,
		y,
		w,
		h,
		fillStyle
	}: {
		x: number;
		y: number;
		w: number;
		h: number;
		fillStyle: string;
	}) {
		super({ x, y });
		this.w = w;
		this.h = h;
		this.fillStyle = fillStyle;
	}
	update() {
		super.update();

		globals.context2d.fillStyle = this.fillStyle;
		globals.context2d.fillRect(this.x, this.y, this.w, this.h);
	}
}
