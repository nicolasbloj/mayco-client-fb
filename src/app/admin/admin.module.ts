import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

import { AngularFireDatabase } from 'angularfire2/database/public_api';

// services
import { ImagesService } from '../_services/images.service';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { SkillsService } from '../_services/skills.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ImagesService, SkillsService, AngularFireDatabase],
  declarations: [AdminComponent, AdminProjectsComponent, AdminSkillsComponent]
})
export class AdminModule { }
