import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';

import { Image } from '../_model/image.model';
import { Project } from '../_model/project.model';

@Injectable()
export class ImagesService {

  private IMAGES_FOLDER = 'imgs';

  constructor(public _angularFire: AngularFireDatabase) {
  }

  public listImages(): Observable<any[]> {
    return this._angularFire.list(`/${this.IMAGES_FOLDER}`).valueChanges();
  }

  public listLastImages(numberImagesTolist: number): Observable<any[]> {
    return this._angularFire.list(`/${this.IMAGES_FOLDER}`, ref => ref.limitToLast(numberImagesTolist)).valueChanges();
  }

  public loadImages(images: Image[]): void {
    console.log('Images ', images);

    const storageRef = firebase.storage().ref();

    for (const image of images) {
      image.uploading = true;

      let uploadTask: firebase.storage.UploadTask;

      uploadTask = storageRef.child(`${this.IMAGES_FOLDER}/${image.file.name}`).put(image.file);

      // obtener info del estado de la subida
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: any) => image.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Erro al subir archivo'),
        () => {
          image.url = uploadTask.snapshot.downloadURL;
          image.uploading = false;
          this.saveImage(image);
        });
    }
  }

  private saveImage(image: Image): void {
    this._angularFire.list(`/${this.IMAGES_FOLDER}`).push(image);
  }

}
