import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private dataService: DataService) {}

  test(message: string) {
    console.log(message);
  }

  popover(event: any) {
    this.dataService.presentPopover(event);
  }

  ngOnInit() {
  }

}
