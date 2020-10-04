import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature() {
    return this.http.get<ResponseMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2020-10-01&api_key=112f7f9a47c2cd93b18968c51ed2d65e`);
  }
}
