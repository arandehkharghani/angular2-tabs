import {Component, OnInit, Input} from 'angular2/core';

@Component({
  selector: 'tab',
  template: `
  
      <div [ngClass]="{'panel panel-default':!largeDevice}">
         <div *ngIf="!largeDevice" class="panel-heading" role="tab" [id]="headingId">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#{{id}}" aria-expanded="true" [attr.aria-controls]="id">
                <span [ngClass]="tabGlyphIcon"></span> {{tabTitle}}
              </a>
            </h4>
          </div>
            
          <div [id]="id" [hidden]="largeDevice && !isActive" [ngClass]="{'panel-collapse collapse in':!largeDevice,'tab-pane':largeDevice, 'active':isActive}"
           [attr.role]="role" [attr.aria-labelledby]="headingId">
            <div [class.panel-body]="!largeDevice">
              <ng-content></ng-content>
            </div>     
          </div>     
        </div>  
  `
})
class TabComponent {
  id: string;
  headingId:string;
  isActive: boolean;
  
  @Input() largeDevice: boolean;  
  @Input() tabTitle: string;
  @Input() tabGlyphIcon: string;
  
  constructor() {
  }
  
  get role():string{
    let role:string;
    if (this.largeDevice){
      role = 'tabpanel';
    }
    else{
      role = 'tab-panel';
    }
    return role;
  }
}

export {TabComponent}