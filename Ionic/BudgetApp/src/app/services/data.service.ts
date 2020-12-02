import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOptions() {
    return this.http.get<Component[]>('assets/data/menu.json');
  }
}
