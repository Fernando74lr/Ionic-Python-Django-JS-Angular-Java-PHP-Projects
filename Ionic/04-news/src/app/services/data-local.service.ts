import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  favoritesNews: Article[] = [];

  constructor(private storage: Storage,
              private toastCtrl: ToastController) {
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

  removeNew(RemoveNew: Article) {
    this.favoritesNews = this.favoritesNews.filter(favNew => favNew.title !== RemoveNew.title);
    this.storage.set('Favorites', this.favoritesNews);
  }

  async favoriteSaved(save) {
    let action = "";
    save ? action='saved' : action='removed';

    const toast = await this.toastCtrl.create({
      message: `Favorite has been ${action}`,
      duration: 2000
    });
    toast.present();
  }

}
