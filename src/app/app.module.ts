import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperDirective } from './wrapper.directive';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { CollapsableheaderComponent } from './collapsableheader/collapsableheader.component';
import { CollapsableListComponent } from './collapsable-list/collapsable-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperDirective,
    CollapsableComponent,
    CollapsableheaderComponent,
    CollapsableListComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
