import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {TabComponent} from './tab.component';
import { ContentChildren, QueryList } from 'angular2/core';
import { AfterContentInit, AfterViewInit } from 'angular2/core';

@Component({
  selector: 'tabs',
  template: `
     
    <div *ngIf="largeDevice">
      <ul class="nav nav-tabs" role="tablist">
        <li *ngFor="let tab of tabs" role="presentation" [class.active]="tab.isActive">
          <a [attr.aria-controls]="tab.id" role="tab" data-toggle="tab" (click)="selectTab(tab)" href="#{{tab.id}}"><span [ngClass]="tab.tabGlyphIcon"></span> {{tab.tabTitle}}</a> 
        </li>
      </ul>
    </div>
    
    <div [ngClass]="{'tab-content':largeDevice,'panel-group':!largeDevice}" role="tablist" aria-multiselectable="true">    
      <ng-content ></ng-content>
    </div>
    
  `
})
class TabsComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {
  @Input() largeDevice: boolean;
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnChanges(changes) {
    if (!this.tabs) return;
    let localTabsRef = this.tabs.toArray();
    if (changes && changes.largeDevice) {
      for (let i = 0; i < localTabsRef.length; i++) {
        localTabsRef[i].largeDevice = changes.largeDevice.currentValue;
      }
    }
  }

  ngAfterContentInit() {
    let localTabsRef = this.tabs.toArray();

    for (let i = 0; i < localTabsRef.length; i++) {
      localTabsRef[i].id = 'tab-' + i;
      localTabsRef[i].headingId = 'heading-' + localTabsRef[i].id;
      localTabsRef[i].largeDevice = this.largeDevice;
    }

    let activeTabs = this.tabs.filter((tab) => tab.isActive);
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    for (let tab of this.tabs.toArray()) {
      tab.isActive = false;
    }

    // activate the tab the user has clicked on.
    tab.isActive = true;
  }
}

export {TabsComponent} 