import { Entity } from '$lib/entities/entity';
import { globals } from '$lib/globals';
import { getImage } from '$lib/utils/images';

export class Tile extends Entity {
	image: HTMLImageElement;
	sx: number;
	sy: number;
	ts: number;
	tx: number;
	ty: number;

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
		this.image = getImage(image);
		this.sx = 1;
		this.sy = 1;
		this.ts = ts;
		this.tx = tx;
		this.ty = ty;
		if (w !== 'image') this.sx = (w === 'canvas' ? globals.canvas.width : w) / this.image.width;
		if (h !== 'image') this.sy = (h === 'canvas' ? globals.canvas.height : h) / this.image.height;
	}
	update() {
		super.update();
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
