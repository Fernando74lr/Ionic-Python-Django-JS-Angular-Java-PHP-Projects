import { Component, OnInit } from '@angular/core';
import { Genre, MovieDetail } from '../interfaces/interfaces';
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

  constructor(private dataLocal: DataLocalService,
              private moviesService: MoviesService) {}

  async ngOnInit() {
    this.movies = await this.dataLocal.loadFavorites();
    this.genders = await this.moviesService.loadGender();
  }

}
