import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  records: Register[] = [];

  constructor(private storage: Storage,
              private navCtrl: NavController,
              private inAppBrowser: InAppBrowser) {
    this.loadStorage();
  }

  async loadStorage() {
    this.records = await this.storage.get('records') || [];
  }

  async saveRecord(format: string, text: string) {
    await this.loadStorage();

    const newRecord = new Register(format, text);
    this.records.unshift(newRecord);

    console.log(this.records);
    this.storage.set('records', this.records);

    this.openRecord(newRecord);
  }
  
  openRecord(record: Register) {
    this.navCtrl.navigateForward('/tabs/tab2');

    switch(record.type) {
      case 'http':
        // Open Browser
        this.inAppBrowser.create(record.text, '_system');
      break;

      case 'geo':
        // Open MapBox
        this.navCtrl.navigateForward(`/tabs/tab2/map/${record.text}`)
      break;
    }
  }

}
