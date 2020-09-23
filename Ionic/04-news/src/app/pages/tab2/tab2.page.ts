import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonSegment) segment: IonSegment;

  categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

  ionViewDidEnter() {
    this.segment.value = this.categories[0];
  }

}
