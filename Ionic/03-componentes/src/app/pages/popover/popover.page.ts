import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) { // We need to send "$event" from the html so it can adapt the size.
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: false // If you want to forze the user to select an option.
    });
    await popover.present();

    // Get info from child to father.
    const { data } = await popover.onWillDismiss();
    console.log(data);
  }


}
