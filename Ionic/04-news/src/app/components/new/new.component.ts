import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() new: Article;
  @Input() index: number;
  @Input() inFavorites;

  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private dataLocalService: DataLocalService) { }

  ngOnInit() {}

  openLink() {
    console.log(this.new.url);
    const browser = this.iab.create(this.new.url, '_system');
  }

  async openMenu() {

    let textFavorite = '', iconFavorite = '';
    let saved: Boolean;

    if (this.inFavorites) {
      // Remove from favorites.
      textFavorite = 'Remove Favorite';
      iconFavorite = 'trash';
      saved = false;
    } else {
      // Add to favorites.
      textFavorite = 'Favorite';
      iconFavorite = 'star';
      saved = true;
    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Share',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          this.socialSharing.share(
            this.new.title,
            this.new.source.name,
            '',
            this.new.url
          );
        }
      },
      {
        text: `${textFavorite}`,
        icon: `${iconFavorite}`,
        cssClass: 'action-dark',
        handler: () => {
          this.inFavorites ? this.dataLocalService.removeNew(this.new) : this.dataLocalService.saveNew(this.new);
          this.dataLocalService.favoriteSaved(saved);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
