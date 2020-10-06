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
  popular: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    // Get movies based on the date from API.
    this.movieService.getFeature()
      .subscribe(response => {
        this.recentMovies = response.results;
    });

    this.getPopular();

  }

  loadMore() {
    this.getPopular();
  }

  // Get popular movies from API.
  getPopular() {
    this.movieService.getPopular()
      .subscribe(response => {
      const arrTemp = [...this.popular, ...response.results];
      this.popular = arrTemp;
    })
  }

}
