import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  records: Register[] = [];

  constructor() { }

  saveRecord(format: string, text: string) {
    const newRecord = new Register(format, text);
    this.records.unshift(newRecord);
    console.log(this.records);
  }
}
