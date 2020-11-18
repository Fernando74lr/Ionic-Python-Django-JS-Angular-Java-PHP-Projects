import { ApplicationRef, Component, EventEmitter, OnInit } from '@angular/core';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { PushService } from '../services/push.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  messages: OSNotificationPayload[] = [];

  constructor(private pushService: PushService,
              private appRef: ApplicationRef) {}

  ngOnInit() {
    this.pushService.pushListener.subscribe(noti => {
      this.messages.unshift(noti);
      // Tells Angular to make the detection cycle again.
      this.appRef.tick()
    });
  }

  async ionViewWillEnter() {
    console.log('Will Enter - Load Messages');
    
    this.messages = await this.pushService.getMessages();
  }
}