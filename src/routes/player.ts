import { AnimatedSprite, type Animation } from '$lib/entities/animatedSprite';
import { getImage } from '$lib/utils/images';

const FLOOR_HEIGHT = 358;

type Animations = 'idle';

type PlayerImages = Record<Animations, HTMLImageElement>;
type PlayerAnimations = Record<Animations, Animation>;

export class Player extends AnimatedSprite {
	vx: number;
	vy: number;
	images: PlayerImages;
	animations: PlayerAnimations;

	constructor({
		x,
		image,
		animations,
		ox,
		oy
	}: {
		x: number;
		image: string;
		animations: PlayerAnimations;
		ox: number;
		oy: number;
	}) {
		super({ x, y: FLOOR_HEIGHT, sx: 3 });
		this.vx = 0;
		this.vy = 0;
		this.ox = ox;
		this.oy = oy;
		this.images = getImage<PlayerImages>(image);
		this.animations = animations;
		this.setCurrentImage(this.images.idle, this.animations.idle);
	}
	update() {
		if (this.y < FLOOR_HEIGHT) {
			this.vy += 1;
		} else {
			this.vy = 0;
			this.y = FLOOR_HEIGHT;
		}

		this.x += this.vx;
		this.y += this.vy;

		super.update();
	}
}
