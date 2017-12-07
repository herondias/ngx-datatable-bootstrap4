import {Component, forwardRef, HostListener, Inject} from '@angular/core';
import {HEADER_STYLE} from './header.style';
import {HEADER_TEMPLATE} from './header.template';
import {DataTable} from './table.component';


@Component({
  selector: 'data-table-header',
  template: HEADER_TEMPLATE,
  styles: [HEADER_STYLE],
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

