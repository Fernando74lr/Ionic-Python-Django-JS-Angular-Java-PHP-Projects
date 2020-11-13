import { Component } from '@angular/core';
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

  constructor(private dataLocal: DataLocalService) {}

  scan() {
    this.dataLocal.scan();
  }

}
