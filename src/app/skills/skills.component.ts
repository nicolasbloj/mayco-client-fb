import { SkillsService } from '../_services/skills.service';
import { Component, OnInit } from '@angular/core';

import { Skill } from '../_model/skill.model';

@Component({
  selector: 'nr-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent implements OnInit {


  skills: Skill[] = [];

  isLoading$ = false;

  constructor(private _skillsService: SkillsService) { }

  ngOnInit() {
    this.list();
  }

  list(): void {
    this.isLoading$ = true;
    this._skillsService.listSkills().subscribe(
      data => {
        this.skills = data;
        this.isLoading$ = false;
      }
    );

  }
}
