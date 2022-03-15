import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableheaderComponent } from './collapsableheader.component';

describe('CollapsableheaderComponent', () => {
  let component: CollapsableheaderComponent;
  let fixture: ComponentFixture<CollapsableheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsableheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
