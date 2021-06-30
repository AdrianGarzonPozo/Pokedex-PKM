export class Pokemon {
    constructor(
        public _id: string,
        public id_pokedex: number,
        public name: string,
        public weigth: number,
        public types: [string],
        public stats: [object],
        public abilities: [object],
        public sprites: [object]
    ) { }
}
