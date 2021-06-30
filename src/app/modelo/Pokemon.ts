export class Pokemon {
    constructor(
        public _id: string,
        public name: string,
        public id_pokedex: number,
        public types: [string],
        public stats: [object],
        public abilities: [object],
        public sprites: [object]
    ) { }
}
