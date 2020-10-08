import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    console.log(this.id);

    // Movie Details.
    this.moviesService.getMovieDetail(this.id)
      .subscribe(response => {
        console.log('Movie Details: ', response);
      });

    // Actors Details.
    this.moviesService.getMovieActors(this.id)
    .subscribe(response => {
      console.log('Actors: ', response);
    });
  }

}
