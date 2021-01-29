import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './reducer/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { productEffects } from './effects/products.effects';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({products:productsReducer}),
    EffectsModule.forRoot([productEffects]),
    NgHttpLoaderModule.forRoot(),
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
