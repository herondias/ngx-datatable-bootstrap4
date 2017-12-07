import {Component, EventEmitter, forwardRef, Inject, Input, OnDestroy, Output} from '@angular/core';
import {DataTable} from '../../';
import {ROW_STYLE} from './row.style';
import {ROW_TEMPLATE} from './row.template';


@Component({
  selector: '[dataTableRow]',
  template: ROW_TEMPLATE,
  styles: [ROW_STYLE]
})
export class DataTableRow implements OnDestroy {

  // row selection:
  private _selected: boolean;
  expanded: boolean;

  @Input()
  item: any;
  @Input()
  index: number;

  @Output()
  selectedChange = new EventEmitter();

  // FIXME is there no template keyword for this in angular 2?
  public _this = this;

  constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {
  }

  get selected() {
    return this._selected;
  }

  set selected(selected) {
    this._selected = selected;
    this.selectedChange.emit(selected);
  }

  // other:
  get displayIndex() {
    if (this.dataTable.pagination) {
      return this.dataTable.displayParams.offset + this.index + 1;
    } else {
      return this.index + 1;
    }
  }

  getTooltip() {
    if (this.dataTable.rowTooltip) {
      return this.dataTable.rowTooltip(this.item, this, this.index);
    }
    return '';
  }

  ngOnDestroy() {
    this.selected = false;
  }
}
