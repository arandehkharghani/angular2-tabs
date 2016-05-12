import {Component, OnInit, Inject,OnChanges} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {TabsComponent} from '../common/components/tab/tabs.component';
import {TabComponent} from '../common/components/tab/tab.component';
import { AppSettings, APP_SETTINGS } from '../app-settings';

@Component({
  templateUrl: 'app/tab-tester/tab-tester.html',
  directives: [TabsComponent, TabComponent],
})

class TabTesterComponent implements OnInit {
        
  isLargeDevice: boolean;
  someExpression = 'Tab 2';
  constructor(@Inject(APP_SETTINGS) private appSettings: AppSettings) {        
  }

  ngOnInit() {
  }  
}

export {TabTesterComponent};