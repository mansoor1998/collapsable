import { AfterContentInit, ContentChildren, Directive, Input, OnDestroy, QueryList } from '@angular/core';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { CollapsableheaderComponent } from './collapsableheader/collapsableheader.component';
import {startWith} from 'rxjs/operators';


@Directive({
  selector: 'app-wrapper',
  inputs: ['multi'],
})
export class WrapperDirective implements AfterContentInit, OnDestroy {

  /** Headers belonging to this accordion. */
  private _ownHeaders = new QueryList<CollapsableheaderComponent>();

  @ContentChildren(CollapsableheaderComponent, { descendants: true })
  _headers: QueryList<CollapsableheaderComponent> | undefined;

  @Input()
  get hideToggle(): boolean { return this._hideToggle; }
  set hideToggle(show: boolean) { this._hideToggle = show; }
  private _hideToggle: boolean = false;

  constructor() { 
    
  }
  ngAfterContentInit(): void {
    this._headers?.changes
    .pipe(startWith(this._headers))
    .subscribe( (headers: QueryList<CollapsableheaderComponent>) => {
      this._ownHeaders.reset( headers.filter(item => true) );
      this._ownHeaders.notifyOnChanges();
    });
  }
  ngOnDestroy(): void {
    this._ownHeaders.destroy();
  }

}
