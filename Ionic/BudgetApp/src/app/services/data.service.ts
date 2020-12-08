import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../components/popover-info/popover-info.component';
import { Component } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,
              private popoverCtrl: PopoverController) { }

  getMenuOptions() {
    return this.http.get<Component[]>('assets/data/menu.json');
  }

  async presentPopover(ev: any) { // We need to send "$event" from the html so it can adapt the size.
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: false // If you want to forze the user to select an option.
    });
    await popover.present();

    // Get info from child to father.
    const { data } = await popover.onWillDismiss();
    console.log(data);
  }

}
