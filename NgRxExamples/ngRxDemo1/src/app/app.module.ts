import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './product.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { displayComponent } from './display.component';

@NgModule({
  declarations: [
    AppComponent,
    displayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({product:addProductReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
