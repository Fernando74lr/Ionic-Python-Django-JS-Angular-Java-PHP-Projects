import { EventEmitter, Injectable } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  messages: OSNotificationPayload[] = [];

  pushListener = new EventEmitter<OSNotificationPayload>();


  constructor(private oneSignal: OneSignal, private storage: Storage) {
    this.loadMessages();
  }

  initialConfiguration() {
    this.oneSignal.startInit('7a3ca103-3377-43e4-aefd-80b7c4148d22', '1016671983209');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    // Do something when notification is received
    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log('Notification received', noti);
      this.receivedNotification(noti);
    });

    // Do something when a notification is opened
    this.oneSignal.handleNotificationOpened().subscribe(async(noti) => {
      console.log('Notification opened', noti);
      await this.receivedNotification(noti.notification);
    });

    this.oneSignal.endInit();
  }

  async receivedNotification(noti: OSNotification) {

    await this.loadMessages()
    const payload = noti.payload;
    const existsPush = this.messages.find(message => message.notificationID === payload.notificationID);

    if (existsPush) {
      return;
    }

    // Add the new message to the array.
    this.messages.unshift(payload);
    // Store the message
    await this.saveMessages();
    // Emits that there's one new message.
    this.pushListener.emit(payload);
    
  }

  async saveMessages() {
    await this.storage.set('messages', this.messages);
  }

  async loadMessages() {
    this.messages = await this.storage.get('messages') || [];
    return this.messages;
  }
  
  async getMessages() {
    await this.loadMessages();
    return [...this.messages];
  }
}
