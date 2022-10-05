import { Entity } from '$lib/entities/entity';
import { getImage } from '$lib/utils/images';
import { globals } from '$lib/globals';

export class Sprite extends Entity {
	image?: HTMLImageElement;
	sx: number;
	sy: number;
	w: number | 'canvas' | 'image';
	h: number | 'canvas' | 'image';
	imageKey: string;

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
		this.sx = 1;
		this.sy = 1;
		this.w = w;
		this.h = h;
		this.imageKey = image;
	}

	init() {
		super.init();
		this.image = getImage<HTMLImageElement>(this.imageKey);
		if (this.w !== 'image')
			this.sx = (this.w === 'canvas' ? globals.canvas.width : this.w) / this.image.width;
		if (this.h !== 'image')
			this.sy = (this.h === 'canvas' ? globals.canvas.height : this.h) / this.image.height;
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
