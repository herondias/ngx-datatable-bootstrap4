import {DatePipe} from '@angular/common';
import {Component} from '@angular/core';
import {DataTableParams, DataTableResource} from '../../datatable';
import {films} from './demo4-data';

@Component({
  selector: 'demo-4',
  templateUrl: './demo4.html',
  styleUrls: ['./demo4.scss']
})
export class Demo4 {

  filmResource = new DataTableResource(films);
  items = [];
  count = 0;
  today = new Date('2018-01-10');
  datePipe = new DatePipe('en-US');

  constructor() {
    this.filmResource.count().then(count => this.count = count);
  }

  reloadFilms(params: DataTableParams) {
    this.filmResource.query(params).then(vals => this.items = vals);
  }

  private getWeeks(date: Date, limit = 10): number[] {
    const weekMs = 1000 * 3600 * 24 * 7;
    date = new Date(date.getTime() - weekMs * 4);
    let result = [];
    for (let i = 0; i < limit; i++) {
      result.push(this.datePipe.transform(date, 'w'));
      date = new Date(date.getTime() + weekMs);
    }
    return result;
  }

  private getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
