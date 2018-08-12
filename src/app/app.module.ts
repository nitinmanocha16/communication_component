import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
