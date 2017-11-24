import { Component, OnInit } from '@angular/core';

import { Project } from '../../_model/project.model';
import { ImagesService } from '../../_services/images.service';

@Component({
  selector: 'nr-admin-projects',
  templateUrl: './admin-projects.component.html'
})
export class AdminProjectsComponent implements OnInit {

  project_aux: Project = new Project(null, '', ''); // {por que}

  constructor(private _imagesService: ImagesService) { }

  ngOnInit() {
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    this.project_aux.file = file;
  }

  updateDescription(description: string): void {
    if (description.length > 254) {
      this.project_aux.description = description.substring(0, 251) + '...';
    } else {
      this.project_aux.description = description;
    }

  }

  upload() {
    console.log(this.project_aux);
    this._imagesService.loadImages([this.project_aux]);
  }

}
