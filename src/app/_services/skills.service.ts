import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { Image } from '../_model/image.model';
import { Project } from '../_model/project.model';
import { Skill } from '../_model/skill.model';

@Injectable()
export class SkillsService {

  private _SKILLS = 'skills';

  constructor(public _angularFire: AngularFireDatabase) {
  }

  public listSkills(): Observable<any[]> { // RETORNAR SKILL[]
    return this._angularFire.list(`/${this._SKILLS}`).valueChanges();
  }

  public listLastSkills(numberskillsTolist: number): Observable<any[]> {
    return this._angularFire.list(`/${this._SKILLS}`, ref => ref.limitToLast(numberskillsTolist)).valueChanges();
  }

  public saveSkill(skill: Skill): void {
    this._angularFire.list(`/${this._SKILLS}`).push(skill);
  }

}
