import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  news: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadData(event) {
    this.loadNews(event);
  }

  loadNews(event?) {
    // Get the news from the API.
    this.newsService.getTopHeadlines().subscribe(data => {
      console.log('news', data);
      this.news.push(...data.articles);
      if (event) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
      }
    });
  }

}
