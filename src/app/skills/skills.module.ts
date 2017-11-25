import { SkillsRoutingModule } from './skills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills.component';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule { }
