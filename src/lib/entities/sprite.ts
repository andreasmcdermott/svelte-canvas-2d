import { Entity } from '$lib/entities/entity';
import { getImage } from '$lib/utils/images';
import { globals } from '$lib/globals';

export class Sprite extends Entity {
	image?: HTMLImageElement;
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
		image?: string;
	}) {
		super({ x, y });
		this.sx = 1;
		this.sy = 1;
		if (image) {
			this.image = getImage<HTMLImageElement>(image);
			if (w !== 'image') this.sx = (w === 'canvas' ? globals.canvas.width : w) / this.image.width;
			if (h !== 'image') this.sy = (h === 'canvas' ? globals.canvas.height : h) / this.image.height;
		}
	}
	update() {
		super.update();
		if (this.image) {
			globals.context2d.drawImage(
				this.image,
				this.x,
				this.y,
				this.image.width * this.sx,
				this.image.height * this.sy
			);
		}
	}
}
