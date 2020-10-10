import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: MovieDetail[] = [];

  constructor(private storage: Storage) { }

  saveMovie(movie: MovieDetail) {
    this.movies.push(movie);
    this.storage.set('movies', this.movies);
  }


}
