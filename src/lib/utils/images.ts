import { browser } from '$app/environment';

type ImageData = {
	promise: Promise<void>;
	image: HTMLImageElement;
	src: string;
};

const images = new Map<string, ImageData>();

const loadImage = (src: string) => {
	const obj = {
		src,
		image: new Image()
	} as ImageData;
	obj.promise = new Promise<void>((resolve) => {
		obj.image.onload = () => {
			resolve();
		};
	});
	obj.image.src = src;
	return obj;
};

export const preloadImages = (_images: Record<string, string>) => {
	if (!browser) return Promise.resolve();
	const promises = Object.entries(_images).map(([key, src]) => {
		if (!images.has(key)) {
			images.set(key, loadImage(src));
		}
		return images.get(key)?.promise;
	});
	return Promise.all(promises);
};

export const getImage = (key: string) => {
	const obj = images.get(key);
	if (!obj) throw new Error(`Image "${key}" need to be loaded first.`);
	return obj.image;
};
