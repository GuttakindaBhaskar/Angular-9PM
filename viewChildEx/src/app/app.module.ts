import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { firstComponent } from './first.component';
import { secondComponent } from './second.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    secondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [firstComponent]
})
export class AppModule { }
