import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SlidesComponent
  ],
  exports: [
    HeaderComponent,
    SlidesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
