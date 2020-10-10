import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: MovieDetail[] = [];

  constructor(private storage: Storage, private toastController: ToastController) {
    this.loadFavorites()
  }

  saveMovie(movie: MovieDetail) {
    let exists = false;
    let message = '';

    for (let movieArray of this.movies) {
      if (movieArray.id === movie.id) {
        exists = true;
        break;
      }
    }

    if (exists) {
      this.movies = this.movies.filter(film => film.id !== movie.id);
      message = 'Removed from favorites';
    } else {
      this.movies.push(movie);
      message = 'Added to favorites';
    }

    this.presentToast(message);
    this.storage.set('movies', this.movies);

    return !exists;
  }

  // Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async loadFavorites() {
    const movies = await this.storage.get('movies');
    this.movies = movies || [];
    return this.movies;
  }

  async movieExists(id) {
    await this.loadFavorites();
    const exists = this.movies.find(item => item.id === id);
    return (exists) ? true : false;
  }


}
