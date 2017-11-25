export class Skill {
    constructor(
        name: string,
        description: string
    );
    constructor(
        public name: string,
        public description: string,
        public id?: number
    ) { }
}

