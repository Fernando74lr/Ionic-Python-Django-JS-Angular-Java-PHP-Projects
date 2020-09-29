import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  favoritesNews: Article[] = [];

  constructor(private storage: Storage) {
    this.loadFavorite();
  }

  saveNew(favoriteNew: Article) {

    const exists = this.favoritesNews.find(favNew => favNew.title === favoriteNew.title);

    if (!exists) {
      this.favoritesNews.unshift(favoriteNew);
      this.storage.set('Favorites', this.favoritesNews);
    }
  }
  
  async loadFavorite() {
    const favorites =  await this.storage.get('Favorites');
    if (favorites) this.favoritesNews = favorites;
  }

}
