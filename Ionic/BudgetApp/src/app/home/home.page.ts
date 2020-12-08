import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dataService: DataService) {}

  test(message: string) {
    console.log(message);
  }

  popover(event: any) {
    this.dataService.presentPopover(event);
  }

}
