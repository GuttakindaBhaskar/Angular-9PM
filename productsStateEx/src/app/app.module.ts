import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './reducer/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { productsEffects } from './effects/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({"products":productsReducer}),
    EffectsModule.forRoot([productsEffects]),
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
