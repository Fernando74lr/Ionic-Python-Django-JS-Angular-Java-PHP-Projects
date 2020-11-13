import { Component } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  swiperOptions = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private dataLocal: DataLocalService) {}

  email() {
    this.dataLocal.email();
  }

}
