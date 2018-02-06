import {Component, forwardRef, HostListener, Inject} from '@angular/core';
import {DataTable} from '../../';

@Component({
  selector: 'data-table-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss']
})
export class DataTableTitleComponent {

  columnSelectorOpen = false;

  constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {
  }

  @HostListener('document:click', ['$event'])
  _closeSelector() {
    this.columnSelectorOpen = false;
  }
}
