import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataTableColumn} from './components/column.directive';
import {DataTableHeader} from './components/header.component';
import {DataTablePagination} from './components/pagination.component';
import {DataTableRow} from './components/row.component';

import {DataTable} from './components/table.component';
import {HideDirective} from './utils/hide.directive';
import {MinPipe} from './utils/min.pipe';
import {PxPipe} from './utils/px.pipe';

export * from './components/types';
export * from './tools/data-table-resource';

export {DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader};
export const DATA_TABLE_DIRECTIVES = [DataTable, DataTableColumn];


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DataTable, DataTableColumn,
    DataTableRow, DataTablePagination, DataTableHeader,
    PxPipe, HideDirective, MinPipe
  ],
  exports: [DataTable, DataTableColumn]
})
export class DataTableModule {
}
