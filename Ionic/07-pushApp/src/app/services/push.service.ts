import { Injectable } from '@angular/core';
import { OneSignal, OSNotification } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  messages: any[] = [
    {
      title: 'Title push',
      body: 'This is the body of the push',
      date: new Date()
    }
  ];

  constructor(private oneSignal: OneSignal) { }

  initialConfiguration() {
    this.oneSignal.startInit('7a3ca103-3377-43e4-aefd-80b7c4148d22', '1016671983209');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    // Do something when notification is received
    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log('Notification received', noti);
      this.receivedNotification(noti);
    });

    // Do something when a notification is opened
    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      console.log('Notification opened', noti);
    });

    this.oneSignal.endInit();
  }

  receivedNotification(noti: OSNotification) {
    const payload = noti.payload;
    const existsPush = this.messages.find(message => message.notificationID === payload.notificationID);

    if (existsPush) {
      return;
    }

    this.messages.unshift(payload);
  }
}
