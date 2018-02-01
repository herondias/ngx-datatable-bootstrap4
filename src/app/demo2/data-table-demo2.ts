import {Component, ViewChild} from '@angular/core';
import {DataTable, DataTableParams, DataTableResource} from '../../datatable';
import {cars} from './data-table-demo2-data';


@Component({
  selector: 'data-table-demo-2',
  templateUrl: './data-table-demo2.html'
})
export class DataTableDemo2 {

  carResource = new DataTableResource(cars);
  cars: any = [];
  carCount = 0;
  yearLimit = 1999;

  @ViewChild(DataTable) carsTable: DataTable;

  constructor() {
    this.rowColors = this.rowColors.bind(this);

    this.carResource.count().then(count => this.carCount = count);
  }

  reloadCars(params: DataTableParams) {
    this.carResource.query(params).then(vals => this.cars = vals);
  }

  // custom features:

  carClicked(car: any) {
    alert(car.model);
  }


  rowColors(car: any) {
    if (car.year >= this.yearLimit) {
      return 'rgb(255, 255, 197)';
    }
  }
}
