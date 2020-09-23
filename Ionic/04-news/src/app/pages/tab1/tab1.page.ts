import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  news: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    // Get the news from the API.
    this.newsService.getTopHeadlines().subscribe(data => {
      console.log('news', data);
      this.news.push(...data.articles)
    });
  }

}
