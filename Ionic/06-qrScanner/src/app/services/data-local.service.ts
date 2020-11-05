import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  records: Register[] = [];

  constructor(private storage: Storage,
              private navCtrl: NavController,
              private inAppBrowser: InAppBrowser,
              private file: File) {
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

  sendEmail() {
    const arrTemp = [];
    const titles = 'Type, Format, Created at, Text\n';

    arrTemp.push(titles);
    this.records.forEach(record => {
      const line = `${record.type}, ${record.format}, ${record.created}, ${record.text.replace(',', ' ')}\n`;

      arrTemp.push(line);
    });

    this.createPhysicalFile(arrTemp.join(''));
  }

  createPhysicalFile(text: string) {
    this.file.checkFile(this.file.dataDirectory, 'registers.csv')
      .then(exists => {
        console.log('Exists?: ', exists);
        return this.writeOnFile(text);
      })
      .catch(error => {
        return this.file.createFile(this.file.dataDirectory, 'registers.csv', false)
                .then(created => this.writeOnFile(text))
                .catch(error_2 => console.log('The file couldn\'t be created', error_2));
      });
  }
  
  async writeOnFile(text: string) {
    await this.file.writeExistingFile(this.file.dataDirectory, 'registers.csv', text);

    console.log("File created");
    console.log(this.file.dataDirectory + "registers.csv");
  }

}
