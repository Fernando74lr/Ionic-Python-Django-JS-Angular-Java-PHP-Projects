import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  records: Register[] = [];

  constructor(private storage: Storage) {
    this.loadStorage();
  }

  async loadStorage() {
    this.records = await this.storage.get('records') || [];
  }

  async saveRecord(format: string, text: string) {

    await this.loadStorage();

    const newRecord = new Register(format, text);
    this.records.unshift(newRecord);

    console.log(this.records);
    this.storage.set('records', this.records);
  }
}
