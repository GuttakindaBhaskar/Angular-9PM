import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { firstComponent } from './components/first.component';
import { secondComponent } from './components/second.component';
import { MainComponent } from './components/main.component';
import { myService } from './services/my.service';

@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    secondComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [myService],
  bootstrap: [MainComponent]
})
export class AppModule { }
