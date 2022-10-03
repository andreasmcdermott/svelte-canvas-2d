import { assets } from '$app/paths';
import { Entity } from '$lib/entities/entity';
import { getImage } from '$lib/utils/images';

export class Sprite extends Entity {
	image: HTMLImageElement;
	sx: number;
	sy: number;

	constructor({
		x,
		y,
		w,
		h,
		image
	}: {
		x: number;
		y: number;
		w: number | 'canvas' | 'image';
		h: number | 'canvas' | 'image';
		image: string;
	}) {
		super({ x, y });
		this.image = getImage(image);
		this.sx = 1;
		this.sy = 1;
		if (w !== 'image') this.sx = (w === 'canvas' ? this.canvas.width : w) / this.image.width;
		if (h !== 'image') this.sy = (h === 'canvas' ? this.canvas.height : h) / this.image.height;
	}
	draw() {
		super.draw();
		this.context2d.drawImage(
			this.image,
			this.x,
			this.y,
			this.image.width * this.sx,
			this.image.height * this.sy
		);
	}
}
