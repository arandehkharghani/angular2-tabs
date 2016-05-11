import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';
import {AppComponent}     from './app.component';
import { LocationStrategy, HashLocationStrategy } from 'angular2/platform/common';


bootstrap(AppComponent,
 [
     ROUTER_PROVIDERS, 
     provide(LocationStrategy, {useClass: HashLocationStrategy}),          
 ]);