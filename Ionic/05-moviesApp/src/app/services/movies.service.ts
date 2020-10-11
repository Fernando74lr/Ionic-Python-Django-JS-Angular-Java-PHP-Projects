import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreditsResponse, Genre, MovieDetail, ResponseMDB } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPage = 0;
  genders: any[] = [];

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}`;
    return this.http.get<T>(query);
  }

  getPopular() {
    this.popularPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.executeQuery<ResponseMDB>(query);
  }

  getFeature() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 1;
    let monthString: any;

    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    const start = `${today.getFullYear()}-${monthString}-01`;
    const end = `${today.getFullYear()}-${monthString}-${lastDay}`;
    
    return this.executeQuery<ResponseMDB>(`/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`);
  }
  
  getMovieDetail(movie_id: string) {
    return this.executeQuery<MovieDetail>(`/movie/${movie_id}?a=1`);
  }

  getMovieActors(movie_id: string) {
    return this.executeQuery<CreditsResponse>(`/movie/${movie_id}/credits?a=1`);
  }

  searchMovie(movie_title: string) {
    return this.executeQuery<ResponseMDB>(`/search/movie?query=${movie_title}`);
  }

  loadGender(): Promise<Genre[]> {
    return new Promise(resolve => {
      this.executeQuery(`/genre/movie/list?a=1`)
        .subscribe(response => {
          this.genders = response['genres'];
          console.log(this.genders);
          resolve(this.genders);
        });
    });
  }

}
