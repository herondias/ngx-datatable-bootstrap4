import {Component} from '@angular/core';
import {DataTableParams, DataTableResource, DataTableRowEvent} from '../../datatable';
import persons from './data-table-demo1-data';


@Component({
  selector: 'data-table-demo-1',
  providers: [],
  templateUrl: './data-table-demo1.html',
  styleUrls: ['./data-table-demo1.scss']
})
export class DataTableDemo1 {

  itemResource = new DataTableResource(persons);
  items: any = [];
  itemCount = 0;

  constructor() {
    this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params: DataTableParams) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:

  rowClick(rowEvent: DataTableRowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent: DataTableRowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item: any) {
    return item.jobTitle;
  }
}
