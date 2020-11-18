import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  initialConfiguration() {
    this.oneSignal.startInit('7a3ca103-3377-43e4-aefd-80b7c4148d22', '1016671983209');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // Do something when notification is received
    console.log('Notification received', noti);
    
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // Do something when a notification is opened
      console.log('Notification opened', noti);

    });

    this.oneSignal.endInit();
  }
}
