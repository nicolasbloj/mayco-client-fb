import { Component, OnInit } from '@angular/core';

import { SkillsService } from '../../_services/skills.service';

import { Skill } from '../../_model/skill.model';

@Component({
  selector: 'nr-admin-skills',
  templateUrl: './admin-skills.component.html'
})
export class AdminSkillsComponent implements OnInit {

  skills: Skill[] = [];

  isLoading$ = false;

  skill_aux: Skill = { name: '', description: '' };

  publicando = false;

  constructor(private _skillsService: SkillsService) { }

  ngOnInit() {
  }

  upload(): void {
    this.publicando = true;
    if (this.skill_aux.name !== '' && this.skill_aux.description !== '') {
      this._skillsService.saveSkill(this.skill_aux);/*.subscribe(data => {

        if (data.status === 201) {
          alert('Servicio cargado correctamente');

          // clean
          this.skill_aux = { name: '', description: '' };

        } else {
          alert('El servicio no pudo ser cargado -- http code ${data.status}');
        }

        this.publicando = false;
      });*/



    } else {
      alert('No se ingresó nombre de servicio, revise sus datos.');
      this.publicando = false;
    }

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

  delete(index: number): void {
    /*this._skillsService.delete(this.skills[index]).subscribe(data => {
      if (data.status === 200) {
        alert('Servicio eliminado correctamente');
        this.skills.splice(index, 1);
      } else {
        alert('El servicio no pudo ser eliminado');
      }
    });*/
  }

  updateDescription(description: string): void {
    if (description.length > 254) {
      this.skill_aux.description = description.substring(0, 251) + '...';
    } else {
      this.skill_aux.description = description;
    }

  }

}

