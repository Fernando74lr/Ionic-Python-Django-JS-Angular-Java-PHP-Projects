import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, MovieDetail } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id: any;

  movie: MovieDetail = {};
  actors: Cast[] = [];
  hidden = 100;

  slideActorsOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.id);

    // Movie Details.
    this.moviesService.getMovieDetail(this.id)
      .subscribe(response => {
        console.log('Movie Details: ', response);
        this.movie = response;
      });

    // Actors Details.
    this.moviesService.getMovieActors(this.id)
    .subscribe(response => {
      console.log('Actors: ', response);
      this.actors = response.cast;
    });
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

}
