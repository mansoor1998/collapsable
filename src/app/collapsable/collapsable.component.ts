import { animate, state, style, transition, trigger } from '@angular/animations';
import { EventEmitter } from '@angular/core';
import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CollapsableheaderComponent } from '../collapsableheader/collapsableheader.component';

const matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: trigger('indicatorRotate', [
    state('collapsed, void', style({transform: 'rotate(0deg)'})),
    state('expanded', style({transform: 'rotate(180deg)'})),
    transition('expanded <=> collapsed, void => collapsed',
      animate(200)),
  ]),
  /** Animation that expands and collapses the panel content. */
};

let uniqueId = 0;

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css'],
  animations: [
    trigger('bodyExpansion', [
      
      state('collapsed', style({ 'height': '0' })),
      state('expanded', style({ 'height': '*' })),
      transition('collapsed <=> expanded', [
        animate('300ms ease')
      ]),

      // state('collapsed, void', style({height: '0px', visibility: 'hidden'})),
      // state('expanded', style({height: '*', visibility: 'visible'})),
      // transition('expanded <=> collapsed, void => collapsed',
      //   animate(200)),
    ])
  ]
})
export class CollapsableComponent implements OnInit, AfterContentInit {
  

  @Input() id: number | null = uniqueId++;

  colapsableClicked = new EventEmitter();

  /** Whether the toggle indicator should be hidden. */
  @Input()
  get expended(): boolean {
    return this._expended;
  }
  set expended(value: boolean) {
    this._expended = value;
  }
  private _expended = false;

  state: string = ''; 

  position: number | null = 0;
  parentLength: number | null = 0;

  @ContentChild(CollapsableheaderComponent) _header: CollapsableheaderComponent | null = null;


  /** Stream that emits for changes in `@Input` properties. */
  readonly _inputChanges = new Subject<SimpleChanges>();

  /** Stream of body animation done events. */
  readonly _bodyAnimationDone = new Subject<AnimationEvent>();

  @ViewChild('body') _body: ElementRef<HTMLElement> | undefined;

  // @ContentChild(MatExpansionPanelContent) _lazyContent: MatExpansionPanelContent;

  constructor(private _viewContainerRef: ViewContainerRef) { }
  ngAfterContentInit(): void {
    if(this._header){
      this._header.id = this.id;
    }

    this._header?.headerClicked.subscribe(() => {
      //console.log(this.id);
      this.expended = !this.expended;
      if(this.expended)
        this.colapsableClicked.emit(this.expended);

      setTimeout(() => console.log(this.expended), 1000 );
    });


  }


   /** Gets the expanded state string. */
   _getExpandedState(): string {
    return this.expended ? 'expanded' : 'collapsed';
  }

  ngOnInit(): void {
    // console.log( this._body );
    if(this.id == null ) throw new Error('Id is not defined');
  }

}
