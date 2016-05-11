/// <reference path="../typings/jquery/jquery.d.ts" />
import { ElementRef, provide } from 'angular2/core';

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {TabTesterComponent} from './tab-tester/tab-tester.component';
import { APPSETTINGS, APP_SETTINGS } from './app-settings';

declare var jQuery: JQueryStatic;

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Tab Component</h1>
    <nav (window:resize)="onResize($event)">
      <a [routerLink]="['TabTester']">Tab Tester</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [provide(APP_SETTINGS, {useValue: APPSETTINGS})],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  { path: '/tab-tester', name: 'TabTester', component: TabTesterComponent }

])
export class AppComponent { 

  private isResizeInProgress:boolean = false;
  public isLargeDevice:boolean = true;
  
  constructor(private el: ElementRef) {
  }

  onResize(event) {
    if (this.isResizeInProgress) return;
    this.isResizeInProgress = true;
    let that = this;
    //console.log(event.target.innerWidth);
    setTimeout(function () {

      let envs = ['xs', 'sm', 'md', 'lg'];

      let $el = jQuery('<div>');
      $el.appendTo(jQuery('body'));

      for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        jQuery($el).addClass('hidden-' + env);
        if (jQuery($el).is(':hidden')) {
          jQuery($el).remove();
          console.log(env);
          that.isResizeInProgress = false;
          that.isLargeDevice = (env == 'xs' || env == 'sm') ? false : true;
          console.log(that.isLargeDevice);
          return env;
        }
      }

    }, 500)
  }

  
}
