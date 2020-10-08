import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../components/detail/detail.component';
import { Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ideas: string[] = [
    'Spider-Man',
    'Sherlock Holmes',
    'The Shining',
    'Avengers',
    'Lord Of The Rings',
    'Life Itself'
  ];
  movies: Movie[] = [];
  searchText = '';
  searching: Boolean = false;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) {}

  
  async showDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

  search(event) {
    const movie = event.detail.value;

    if (movie.length === 0) {
      this.searching = false;
      this.movies = [];
      return;
    }

    this.searching = true;
    
    // Search Movie
    this.moviesService.searchMovie(movie)
      .subscribe(response => {
        this.movies = response['results'];
        this.searching = false;
      });
  }


}