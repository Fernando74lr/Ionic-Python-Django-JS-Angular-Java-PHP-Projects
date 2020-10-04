import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentMovies: Movie[] = [];

  slidesOptions = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getFeature()
      .subscribe(response => {
        console.log('Response', response);
        this.recentMovies = response.results;
      });
  }

}
