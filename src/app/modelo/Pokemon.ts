export class Pokemon {
    constructor(
        public id: string,
        public name: string,
        public weight: number,
        public types: [any],
        public stats: [object],
        public abilities: [object],
        public sprites: [object]
    ) { }
}
