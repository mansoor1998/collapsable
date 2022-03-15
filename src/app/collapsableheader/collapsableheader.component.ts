import { AfterContentInit, Component, Input, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-collapsableheader',
  templateUrl: './collapsableheader.component.html',
  styleUrls: ['./collapsableheader.component.css']
})
export class CollapsableheaderComponent implements OnInit, AfterContentInit {

  public id: number | null = null; 

  headerClicked = new EventEmitter();

  constructor() { }
  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
  }

  setExpanded(event: Event){
    this.headerClicked.emit(event);
  }

}
