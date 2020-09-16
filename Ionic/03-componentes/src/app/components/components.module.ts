import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PopoverInfoComponent } from './popover-info/popover-info.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopoverInfoComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
