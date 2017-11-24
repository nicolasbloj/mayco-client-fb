import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

import { AngularFireDatabase } from 'angularfire2/database/public_api';
import { ImagesService } from '../_services/images.service';

import { AngularFireModule } from 'angularfire2/public_api';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ImagesService, AngularFireDatabase],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }

