import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  constructor() { }

  ngOnInit() {}

}
