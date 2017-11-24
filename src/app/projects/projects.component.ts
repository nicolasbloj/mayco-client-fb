import { Component, OnInit } from '@angular/core';

import { Project } from '../_model/project.model';
import { ImagesService } from '../_services/images.service';

@Component({
  selector: 'nr-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  isLoading$ = false;

  constructor(private _imagesService: ImagesService) { }

  ngOnInit() {
    this.isLoading$ = true;
    this._imagesService.listImages()
      .subscribe(data => {
        this.projects = data;
        this.isLoading$ = false;
        console.log(this.projects);
      });

  }

}
