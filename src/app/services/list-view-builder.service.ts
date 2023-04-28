import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Record {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ListViewBuilderService {
  headers: string[] = [];
  //data: string[][] = [];

  constructor(private datePipe: DatePipe) { }

  buildListViewData(headerKey: { [key: string]: any }, records: Record[]): string[][] {
    // Build headers
    this.headers = Object.keys(headerKey).map(key => headerKey[key]);

    // Build data
    /* try {
       const data = records.map(record => {
         return Object.keys(headerKey).map((key: keyof Record) => {
           const value = record[key];
           if (value && typeof value === 'string' && value.match(/^Timestamp\(seconds=\d+, nanoseconds=\d+\)$/)) { 
             const timestamp = value.match(/seconds=(\d+)/)[1], 10);
             if(timestamp){
               timestamp = parseInt(timestamp)
               const date = new Date(timestamp * 1000);
               return this.datePipe.transform(date, 'MM/dd/yyyy');; // replace `formatDate` with the function that formats the date
             }
           } else {
             return value !== null && value !== undefined ? value : '';
           }
         });
       });
       return data;
     } catch (error) {
       console.log(error);
       return [];
     }
   }*/

    try {
      const data = records.map(record => {
        return Object.keys(headerKey).map((key: keyof Record) => {
          const value = record[key];
          if (value && typeof value === 'object' && value.hasOwnProperty('seconds') && value.hasOwnProperty('nanoseconds')) {
            const timestamp = parseInt(value.seconds, 10);
            const date = new Date(timestamp * 1000);
            return this.datePipe.transform(date, 'MM/dd/yyyy'); // replace `formatDate` with the function that formats the date
          } else {
            return value !== null && value !== undefined ? value : '';
          }
        });
      });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }


}
