import {DataTableColumn} from './column/column.directive';
import {DataTableRow} from './row/row.component';

export type RowCallback = (item: any, row: DataTableRow, index: number) => string;
export type CellCallback = (item: any, row: DataTableRow, column: DataTableColumn, index: number) => string;

export interface DataTableTranslations {
  indexColumn: string;
  selectColumn: string;
  expandColumn: string;
  paginationLimit: string;
  paginationRange: string;
}

export const defaultTranslations = <DataTableTranslations>{
  indexColumn: 'index',
  selectColumn: 'select',
  expandColumn: 'expand',
  paginationLimit: 'Limit',
  paginationRange: 'Results'
};

export interface DataTableParams {
  offset?: number;
  limit?: number;
  sortBy?: string;
  sortAsc?: boolean;
}
