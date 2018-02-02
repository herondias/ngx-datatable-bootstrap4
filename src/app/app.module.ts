import {CommonModule} from '@angular/common';
import {ApplicationRef, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {createNewHosts, removeNgStyles} from '@angularclass/hmr';
import {DataTableModule} from '../datatable';

import {AppComponent} from './app.component';

import {Demo1} from './demo1/demo1';
import {Demo2} from './demo2/demo2';
import {Demo3} from './demo3/demo3';
import {Demo4} from './demo4/demo4';

@NgModule({
  declarations: [
    AppComponent,
    Demo1,
    Demo2,
    Demo3,
    Demo4
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
