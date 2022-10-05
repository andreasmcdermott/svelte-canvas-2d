export class Entity {
	x: number;
	y: number;

	constructor({
		x = 0,
		y = 0
	}: {
		x?: number;
		y?: number;
	} = {}) {
		this.x = x;
		this.y = y;
	}
	init() {}
	destroy() {}
	update() {}
}
