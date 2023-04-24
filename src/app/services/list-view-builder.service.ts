import { Injectable } from '@angular/core';

interface Record {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ListViewBuilderService {
  headers: string[] = [];
  //data: string[][] = [];

  constructor() { }

  buildListViewData(headerKey: { [key: string]: any }, records: Record[]): string[][] {
    // Build headers
    this.headers = Object.keys(headerKey).map(key => headerKey[key]);

    // Build data
    try {
      const data = records.map(record => {
        return Object.keys(headerKey).map((key: keyof Record) => {
          const value = record[key];
          return value !== null && value !== undefined ? value : '';
        });
      });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

}
