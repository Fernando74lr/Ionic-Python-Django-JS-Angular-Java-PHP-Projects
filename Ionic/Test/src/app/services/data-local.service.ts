import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private barcodeScanner: BarcodeScanner,
              private emailComposer: EmailComposer,
              public toastController: ToastController) { }

  // Scanner
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
     this.toast('Scanner complete')
  }

  // Email
  email() {
    let email = {
      to: 'flopezramirez@hotmail.com',
      subject: 'Testing Email',
      body: 
        `<h1>Title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor et nihil fugiat dolorem officia cupiditate eum nulla 
            atque deserunt hic repellat, recusandae voluptates.
          </p>
          <br>
          <h3>
            Fernando López Ramírez
            22-26-75-48-31
          </h3>`
      ,
      isHtml: true
    }
    
    // Send a text message using default options
    this.emailComposer.open(email);

    this.toast('Email sent succesfully');
  }

  async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 700
    });
    toast.present();
  }

}
