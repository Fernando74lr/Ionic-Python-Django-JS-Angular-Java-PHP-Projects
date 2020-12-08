import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SlidesComponent } from './slides/slides.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SlidesComponent,
    PopoverInfoComponent
  ],
  exports: [
    HeaderComponent,
    SlidesComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
