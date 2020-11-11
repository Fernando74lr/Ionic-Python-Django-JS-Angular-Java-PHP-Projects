import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  records: Register[] = [];

  constructor(private storage: Storage,
              private navCtrl: NavController,
              private inAppBrowser: InAppBrowser,
              private file: File,
              private emailComposer: EmailComposer,
              private toastController: ToastController) {
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
    this.file.checkFile(this.file.dataDirectory, 'registers.csv');
    this.file.createFile(this.file.dataDirectory, 'registers.csv', false)
                .then(created => this.writeOnFile(text))
                .catch(error_2 => console.log('The file couldn\'t be created', error_2));
  }
  
  async writeOnFile(text: string) {
    await this.file.writeExistingFile(this.file.dataDirectory, 'registers.csv', text);

    const file = `${this.file.dataDirectory}registers.csv`;

    this.emailComposer.addAlias('gmail', 'com.google.android.gm');

    const email = {
      to: 'flopezramirez@hotmail.com',
      // cc: 'erika@mustermann.de',
      // bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        file
      ],
      subject: 'Backup of Scans',
      body: 'Hey! Here you have the backups of the scans you\'ve made | <strong>ScanApp</strong>',
      isHtml: true,
      app: 'gmail'
    };

    // Send a text message using default options.
    this.emailComposer.open(email);
    this.presentToast("Email sent.");
  }

  // Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 700
    });
    toast.present();
  }

}
