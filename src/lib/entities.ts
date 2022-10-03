import type { Entity } from './entities/entity';

export let entities: Entity[] = [];

export const add = (entity: Entity) => {
	entities.push(entity);
};

export const remove = (entity: Entity) => {
	entities.splice(entities.indexOf(entity), 1);
};
