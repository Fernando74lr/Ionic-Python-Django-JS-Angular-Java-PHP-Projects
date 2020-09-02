import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titleInput: string;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    // Wait until the alert is created.
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'red',
          handler: (blah) => {
            console.log('Button Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Button Ok');
          }
        }
      ]
    });
    // Show Alert
    await alert.present();
  }

  async presentInput() {
    const input = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Write your title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'red',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Ok: ', data);
            this.titleInput = data.title;
          }
        }
      ]
    });

    await input.present();
  }

}
