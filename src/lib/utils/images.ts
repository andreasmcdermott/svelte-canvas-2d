import { browser } from '$app/environment';

type ImageData = {
	promise: Promise<void>;
	type: 'static' | 'animated';
	image: HTMLImageElement | { [key: string]: HTMLImageElement };
	src: string | { [key: string]: string };
};

const images = new Map<string, ImageData>();

const loadImage = (src: string | { [key: string]: string }) => {
	if (typeof src === 'string') {
		const obj = {
			src,
			type: 'static',
			image: new Image()
		} as ImageData;
		obj.promise = new Promise<void>((resolve) => {
			obj.image.onload = () => {
				resolve();
			};
		});
		obj.image.src = src;
		return obj;
	} else {
		const obj = {
			src,
			type: 'animated'
		} as ImageData;
		const images = {} as { [key: string]: HTMLImageElement };
		const promises = [];
		for (const key in src) {
			const _src = src[key];
			images[key] = new Image();
			const promise = new Promise<void>((resolve) => {
				images[key].onload = () => {
					resolve();
				};
			});
			images[key].src = _src;
			promises.push(promise);
		}
		obj.image = images;
		obj.promise = Promise.all(promises).then(() => {});
		return obj;
	}
};

export const preloadImages = (_images: Record<string, string | { [key: string]: string }>) => {
	if (!browser) return Promise.resolve();
	const promises = Object.entries(_images).map(([key, src]) => {
		if (!images.has(key)) {
			images.set(key, loadImage(src));
		}
		return images.get(key)?.promise;
	});
	return Promise.all(promises);
};

export const getImage = <T>(key: string): T => {
	const obj = images.get(key);
	if (!obj) throw new Error(`Image "${key}" need to be loaded first.`);
	return obj.image as T;
};
