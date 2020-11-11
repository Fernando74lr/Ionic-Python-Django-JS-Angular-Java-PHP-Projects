import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOptions = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private barcodeScanner: BarcodeScanner,
              private dataLocal: DataLocalService) {}

  ionViewDidEnter() {
  }
  
  ionViewDidLeave() {
  }
  
  ionViewWillEnter() {
    this.scan();
  }

  ionViewWillLeave() {
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('QR data: ', barcodeData);
      if (!barcodeData.cancelled) {
        console.log("THEN")
        this.dataLocal.saveRecord(barcodeData.format, barcodeData.text);
      }
     }).catch(err => {
       console.log("CATCH: ", err);
        this.dataLocal.saveRecord('QRCode', 'geo:19.013111,-98.212282');
     });
  }

}
