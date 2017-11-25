import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2/public_api';

import { AngularFireDatabase } from 'angularfire2/database/public_api';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { SkillsService } from '../_services/skills.service';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [SkillsService, AngularFireDatabase],
  declarations: [SkillsComponent]
})
export class SkillsModule { }
