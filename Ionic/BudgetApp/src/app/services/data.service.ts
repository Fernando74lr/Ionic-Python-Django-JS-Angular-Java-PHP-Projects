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

  // Menu Options
  getMenuOptions() {
    return this.http.get<Component[]>('assets/data/menu.json');
  }

  // Popover
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: true
    });
    await popover.present();

    // Get info from child to father.
    const { data } = await popover.onWillDismiss();
    console.log(data);
  }

  // Gretting by the moment of the day
  getDayMoment() {
    let hour = new Date().getHours();
    let greet: string;
    if (hour < 12) return greet = 'Good morning! 👋';
    if (hour >= 12 && hour < 18) return greet = 'Good afternoon! 👋';
    if (hour >= 18 && hour < 20) return greet = 'Good evening! 🌗';
    if (hour >= 20) return greet = 'Good night! 🌙';
  }

}
