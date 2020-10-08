import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ideas: string[] = ['Spider-Man', 'Sherlock Holmes', 'The Shining', 'Avengers', 'Lord Of The Rings', 'Life Itself'];
  searchText = '';

  constructor(private moviesService: MoviesService) {}

  search(event) {
    const movie = event.detail.value;
    
    this.moviesService.searchMovie(movie)
      .subscribe(response => {
        console.log(response);
      });
  }


}