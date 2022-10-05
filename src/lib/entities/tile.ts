import { Entity } from '$lib/entities/entity';
import { globals } from '$lib/globals';
import { getImage } from '$lib/utils/images';

export class Tile extends Entity {
	image?: HTMLImageElement;
	sx: number;
	sy: number;
	ts: number;
	tx: number;
	ty: number;
	imageKey: string;
	w: number | 'canvas' | 'image';
	h: number | 'canvas' | 'image';

	constructor({
		x,
		y,
		w,
		h,
		image,
		ts,
		tx,
		ty
	}: {
		x: number;
		y: number;
		w: number | 'canvas' | 'image';
		h: number | 'canvas' | 'image';
		image: string;
		ts: number;
		tx: number;
		ty: number;
	}) {
		super({ x, y });
		this.imageKey = image;
		this.sx = 1;
		this.sy = 1;
		this.ts = ts;
		this.tx = tx;
		this.ty = ty;
		this.w = w;
		this.h = h;
	}

	init() {
		super.init();

		this.image = getImage(this.imageKey);
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
				this.tx * this.ts,
				this.ty * this.ts,
				this.ts,
				this.ts,
				this.x,
				this.y,
				this.image.width * this.sx,
				this.image.height * this.sy
			);
		}
	}
}
