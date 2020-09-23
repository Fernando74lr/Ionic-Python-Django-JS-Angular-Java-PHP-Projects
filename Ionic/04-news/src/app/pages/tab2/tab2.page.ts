import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  news: Article[]= [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // Get the top headlines.
    this.loadNews(this.categories[0]);
  }

  ionViewDidEnter() {
    // Set the first category as selected.
    this.segment.value = this.categories[0];
  }

  categoryChange(event) {
    // Reset the array.
    this.news = [];
    // Show news depending on the category.
    this.loadNews(event.detail.value); 
  }

  loadNews(category: string) {
    // Get the top headlines from the API using our service.
    this.newsService.getTopHeadlinesCategory(category)
      .subscribe(data => {
        console.log(data);
        this.news.push(...data.articles)
      });
  }

}
