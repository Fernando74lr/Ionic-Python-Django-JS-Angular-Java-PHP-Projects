import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any>;
  company: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superheroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    console.log(event.detail.value);
  }

  getDc = () => this.company = "DC";

  getMarvel = () => this.company = "Marvel";
}
