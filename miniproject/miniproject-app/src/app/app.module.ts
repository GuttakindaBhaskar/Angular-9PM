import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './reducer/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { productEffects } from './effects/products.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({products:productsReducer}),
    EffectsModule.forRoot([productEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
