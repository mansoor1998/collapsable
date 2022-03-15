import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, ContentChildren, OnDestroy, OnInit, QueryList } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { CollapsableComponent } from '../collapsable/collapsable.component';

@Component({
  selector: 'app-collapsable-list',
  templateUrl: './collapsable-list.component.html',
  styleUrls: ['./collapsable-list.component.css']
})
export class CollapsableListComponent implements AfterContentInit, OnDestroy {


  /** Headers belonging to this accordion. */
  private _ownHeaders = new QueryList<CollapsableComponent>();

  private eventIds: number[] | any = [];

  @ContentChildren(CollapsableComponent)
  _headers: QueryList<CollapsableComponent> | undefined;


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(){
  }

  private setHeaderListenEvent(header: CollapsableComponent, position: number) {
    this.eventIds.push(header.id);
    header.colapsableClicked.subscribe((isExpanded) => {
      const id = header.id;
      if ( isExpanded ) {
        console.log(position);
        this._headers?.forEach(x => { if(x.id != id) { x.expended = false; } });
      }
    });


  }

  ngAfterContentInit(): void {

    this._headers?.changes
    .pipe(startWith(this._headers))
    .subscribe( (headers: QueryList<CollapsableComponent>) => {

      this._headers?.forEach( ( item, index ) => {
        setTimeout(() => {
          item.position = index;
          item.parentLength = this._headers ? this._headers.length : null;
        });
        if ( this.eventIds.findIndex((x: number) => x === item.id) === -1 ) {
          this.setHeaderListenEvent.call(this, item, index);
        }
      });

    });

    
  }
  ngOnDestroy(): void {
    this._ownHeaders.destroy();
  }

}
