import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  PATH_LOGO = 'assets/logo.png';

  PATH_PROJECT_1 = 'assets/mayco-project-1.jpg';
  PATH_PROJECT_2 = 'assets/mayco-project-2.jpg';
  PATH_PROJECT_3 = 'assets/mayco-project-3.jpg';
  PATH_PROJECT_4 = 'assets/mayco-project-4.jpg';
  PATH_PROJECT_5 = 'assets/mayco-project-5.jpg';

  constructor() { }

  ngOnInit() {
  }

}
