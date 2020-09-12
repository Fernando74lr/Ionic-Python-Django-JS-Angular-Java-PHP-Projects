import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    // Get the item I'm moving.
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];

    // Move that item to the end of the array and delete the last one.
    this.personajes.splice(event.detail.to, 0, itemMover);

    // This is to reorder the list and so it doesn't freeze.
    event.detail.complete();
  }

  onClick() {
    console.log(this.personajes);
  }

}
