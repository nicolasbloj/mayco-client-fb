export class Image {

    public file: File;

    public url: string;

    public uploading = false;
    public progress = 0;

    constructor(file: File) {
        this.file = file;
    }
}
