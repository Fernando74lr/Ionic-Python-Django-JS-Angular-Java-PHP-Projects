import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<ResponseTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3732d971e4b3426eb2937953ce806e5d`);
  }
}
