export type Name = { id: number; name: string };

export type Group<T = Array<Name>> = T[][];
