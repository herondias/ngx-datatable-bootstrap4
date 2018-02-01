import {CommonModule} from '@angular/common';
import {ApplicationRef, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {createNewHosts, removeNgStyles} from '@angularclass/hmr';
import {DataTableModule} from '../datatable';

import {AppComponent} from './app.component';

import {DataTableDemo1} from './demo1/data-table-demo1';
import {DataTableDemo2} from './demo2/data-table-demo2';
import {DataTableDemo3} from './demo3/data-table-demo3';

@NgModule({
  declarations: [
    AppComponent,
    DataTableDemo1,
    DataTableDemo2,
    DataTableDemo3
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public appRef: ApplicationRef) {
  }

  hmrOnInit(store) {
    console.log('HMR store', store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
