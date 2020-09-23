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

  constructor(private http: HttpClient) { }



  getTopHeadlines() {
    return this.http.get<ResponseTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3732d971e4b3426eb2937953ce806e5d`);
  }

  getTopHeadlinesCategory(category: string) {
    return this.http.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3732d971e4b3426eb2937953ce806e5d');
  }
}
