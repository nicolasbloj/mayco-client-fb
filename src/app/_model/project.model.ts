import { Image } from './image.model';

export class Project extends Image {

    public name: string;
    public description: string;

    constructor(file: File, name: string, description: string) {
        super(file);
        this.name = name;
        this.description = description;
    }
}
