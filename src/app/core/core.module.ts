import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShellComponent,
    MainContentComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
