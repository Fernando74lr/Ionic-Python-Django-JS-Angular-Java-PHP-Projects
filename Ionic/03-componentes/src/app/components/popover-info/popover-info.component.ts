import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number) {
    console.log(valor);

    // Close popover when any item is selected.
    this.popoverController.dismiss({
      item: valor
    });
  }
  

}
