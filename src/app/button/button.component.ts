import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';


// , button[mat-raised-button], button[mat-icon-button],
//              button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],
//              button[mat-flat-button]

@Component({
  selector: `button[mat-button]`,
  exportAs: 'matButton',
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
    // Add a class for disabled button styling instead of the using attribute
    // selector or pseudo-selector.  This allows users to create focusabled
    // disabled buttons without recreating the styles.
    '[class.mat-button-disabled]': 'disabled',
    'class': 'mat-focus-indicator',
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  inputs: ['disabled', 'disableRipple', 'color'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    
  }

  getHostElement(): HTMLElement{
    return this.elementRef.nativeElement;
  }

  hostAttributes(){
    this.getHostElement().hasAttribute('mat-button')
  }

  isRoundButton: boolean = true;

  isIconButton: boolean = false;

}
