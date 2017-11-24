import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

// services
import { AngularFireDatabase } from 'angularfire2/database/public_api';
import { ImagesService } from '../_services/images.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ImagesService, AngularFireDatabase],
  declarations: [AdminComponent, AdminProjectsComponent]
})
export class AdminModule { }
