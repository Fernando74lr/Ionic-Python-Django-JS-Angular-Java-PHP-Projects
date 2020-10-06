import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-even',
  templateUrl: './slideshow-even.component.html',
  styleUrls: ['./slideshow-even.component.scss'],
})
export class SlideshowEvenComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() loadMore = new EventEmitter();
    
  slidesOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClick() {
    this.loadMore.emit();
  }

  async showDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
