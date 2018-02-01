import {Component, forwardRef, HostListener, Inject} from '@angular/core';
import {DataTable} from '../../';

@Component({
  selector: 'data-table-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class DataTableHeader {

  columnSelectorOpen = false;

  constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {
  }

  @HostListener('document:click', ['$event'])
  _closeSelector() {
    this.columnSelectorOpen = false;
  }
}

