import { Entity } from '$lib/entities/entity';
import { globals } from '$lib/globals';

export type Animation = {
	frames: number;
	speed: number;
};

export class AnimatedSprite extends Entity {
	image?: HTMLImageElement;
	sx: number;
	sy: number;
	ox: number;
	oy: number;
	animation: Animation;
	currentFrame: number;
	frameCount: number;

	constructor({
		x,
		y,
		sx = 1,
		sy = sx
	}: {
		x: number;
		y: number;
		image?: string;
		sx?: number;
		sy?: number;
	}) {
		super({ x, y });
		this.sx = sx;
		this.sy = sy;
		this.ox = 0;
		this.oy = 0;
		this.animation = { frames: 1, speed: 0 };
		this.currentFrame = 0;
		this.frameCount = 0;
	}

	init() {
		super.init();
	}

	setCurrentImage(image: HTMLImageElement, animation: Animation, currentFrame: number = 0) {
		this.image = image;
		this.animation = animation;
		this.currentFrame = currentFrame;
	}

	update() {
		super.update();
		if (this.image) {
			globals.context2d.drawImage(
				this.image,
				(this.currentFrame * this.image.width) / this.animation.frames,
				0,
				this.image.width / this.animation.frames,
				this.image.height,
				this.x + this.ox,
				this.y + this.oy,
				(this.image.width / this.animation.frames) * this.sx,
				this.image.height * this.sy
			);
		}

		if (++this.frameCount % this.animation.speed === 0) {
			this.currentFrame = (this.currentFrame + 1) % this.animation.frames;
		}
	}
}
