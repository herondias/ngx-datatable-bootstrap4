import {Component, forwardRef, Inject} from '@angular/core';
import {DataTable} from '../../';
import {PAGINATION_STYLE} from './pagination.style';
import {PAGINATION_TEMPLATE} from './pagination.template';


@Component({
  selector: 'data-table-pagination',
  template: PAGINATION_TEMPLATE,
  styles: [PAGINATION_STYLE]
})
export class DataTablePagination {

  constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {
  }

  pageBack() {
    this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
  }

  pageForward() {
    this.dataTable.offset += this.dataTable.limit;
  }

  pageFirst() {
    this.dataTable.offset = 0;
  }

  pageLast() {
    this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
  }

  get maxPage() {
    return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
  }

  get limit() {
    return this.dataTable.limit;
  }

  set limit(value) {
    // TODO better way to handle that value of number <input> is string?
    this.dataTable.limit = Number(<any>value);
  }

  get page() {
    return this.dataTable.page;
  }

  set page(value) {
    this.dataTable.page = Number(<any>value);
  }
}