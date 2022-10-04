import { entities } from '$lib/entities';

let instance: Scene;

export class Scene {
	beforeUpdate: (() => void)[];
	lastFrame: number;

	static start() {
		Scene.instance().lastFrame = performance.now();
		requestAnimationFrame(() => instance.update());
	}

	static instance() {
		if (!instance) {
			instance = new Scene();
		}
		return instance;
	}

	constructor() {
		if (instance) throw new Error('Only a single Scene can be created at a time.');
		this.beforeUpdate = [];
		this.lastFrame = 0;
	}

	onBeforeUpdate(cb: () => void) {
		this.beforeUpdate.push(cb);
	}

	update() {
		for (const fn of this.beforeUpdate) {
			fn();
		}

		for (const entity of entities) {
			entity.update();
		}

		requestAnimationFrame(() => this.update());
	}
}
