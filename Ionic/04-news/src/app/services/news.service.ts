import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseTopHeadlines } from '../interfaces/interfaces';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  headlinesPage = 0;
  categoryPage = 0;
  currentCategory: string = '';

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  getTopHeadlines() {
    this.headlinesPage++;
    return this.executeQuery<ResponseTopHeadlines>(`/top-headlines?country=us&page=${this.headlinesPage}`);
  }

  getTopHeadlinesCategory(category: string) {
    if (this.currentCategory === category) {
      this.categoryPage++
    } else {
      this.categoryPage = 0;
      this.currentCategory = category;
    }
    
    console.log(`Counter: ${this.categoryPage} | Category: ${category}`);
    return this.executeQuery<ResponseTopHeadlines>(`/top-headlines?country=us&category=${category}&page=${this.categoryPage}`);
  }
}
