import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { meanComponent } from './components/mean.component';
import { mernComponent } from './components/mern.component';

@NgModule({
  declarations: [
    AppComponent,
    meanComponent,
    mernComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [mernComponent]
})
export class AppModule { }
