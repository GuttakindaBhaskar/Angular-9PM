import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { pageOneComponent } from './pageone.component';
import { authGuard } from './auth.guard';
import { MainComponent } from './main.component';
import {  NgHttpLoaderModule } from 'ng-http-loader';

export const appRoutes:Routes = [
    {path:"page_one",component:pageOneComponent},
    {path:"lazy",loadChildren:()=>import("./countries.module").then(obj=>obj.countriesModule),canLoad:[authGuard]}
];

export const lazyModule:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


@NgModule({
  declarations: [
    AppComponent,
    pageOneComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NgHttpLoaderModule.forRoot(),
    lazyModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
