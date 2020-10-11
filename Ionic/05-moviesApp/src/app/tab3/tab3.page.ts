import { Component, OnInit } from '@angular/core';
import { Genre, Movie, MovieDetail } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  movies: MovieDetail[] = [];
  genders: Genre[] = [];

  favoriteGender: any[] = [];

  constructor(private dataLocal: DataLocalService,
              private moviesService: MoviesService) {}

  ngOnInit() {}

  // This launchs every time the page is going to open.
  async ionViewWillEnter() {
    this.movies = await this.dataLocal.loadFavorites();
    this.genders = await this.moviesService.loadGender();
    this.moviesByGender(this.genders, this.movies);
  }

  moviesByGender(gender: Genre[], movies: MovieDetail[]) {
    this.favoriteGender = [];
    gender.forEach(gen => {
      this.favoriteGender.push({
          gender: gen.name,
          movies: movies.filter(movie => {
            return movie.genres.find(genre => genre.id === gen.id);
          })
        }
      );
    });
  }
}

