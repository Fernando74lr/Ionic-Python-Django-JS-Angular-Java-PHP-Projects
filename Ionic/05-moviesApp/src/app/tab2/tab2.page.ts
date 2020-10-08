import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ideas: string[] = ['Spider-Man', 'Sherlock Holmes', 'The Shinning', 'Avengers', 'Lord Of The Rings', 'Life Itself'];
  searchText = '';

  constructor() {}

  search(event) {
    const value = event.detail.value;
    console.log(value);
  }


}