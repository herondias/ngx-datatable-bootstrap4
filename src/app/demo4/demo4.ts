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
  weeks: any[];
  months: any[];

  constructor() {
    this.filmResource.count().then(count => this.count = count);
    this.constructDates(this.today);
  }

  reloadFilms(params: DataTableParams) {
    this.filmResource.query(params).then(vals => this.items = vals);
  }

  private constructDates(date: Date, limit = 10) {
    const weekMs = 1000 * 3600 * 24 * 7;
    date = new Date(date.getTime() - weekMs * 4);
    const result = [];
    for (let i = 0; i < limit; i++) {
      result.push({
        week: this.datePipe.transform(date, 'w'),
        month: this.datePipe.transform(date, 'MMMM'),
        year: this.datePipe.transform(date, 'yyyy')
      });
      date = new Date(date.getTime() + weekMs);
    }
    this.weeks = result.map((value) => value.week);
    this.months = result.filter((value, index, self) => index === self.findIndex(val => val.month === value.month));
  }

  private incDate() {
    this.today.setMonth(this.today.getMonth() + 1);
    this.constructDates(this.today);
  }

  private decDate() {
    this.today.setMonth(this.today.getMonth() - 1);
    this.constructDates(this.today);
  }
}
