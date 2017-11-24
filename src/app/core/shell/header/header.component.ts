import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  PATH_LOGO = 'assets/logo_sin_fondo.png';

  constructor() { }

  ngOnInit() {
  }

}
