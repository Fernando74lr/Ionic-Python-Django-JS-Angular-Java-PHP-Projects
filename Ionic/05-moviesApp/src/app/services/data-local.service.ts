import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: MovieDetail[] = [];

  constructor(private storage: Storage,
              private toastController: ToastController) { }

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
  }

  // Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


}
