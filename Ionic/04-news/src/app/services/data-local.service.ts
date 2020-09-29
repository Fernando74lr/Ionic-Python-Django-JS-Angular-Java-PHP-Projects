import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  favorites: Article[] = [];

  constructor(private storage: Storage) { }

  saveNew(favoriteNew: Article) {

    const exists = this.favorites.find(favNew => favNew.title === favoriteNew.title);

    if (!exists) {
      this.favorites.unshift(favoriteNew);
      this.storage.set('Favorites', this.favorites);
    }
  }
  
  loadFavorite() {
    
  }

}
