import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { LaptopComponent } from './components/laptop.component';
import { CameraComponent } from './components/camera.component';
import { ClothesComponent } from './components/clothes.component';
import { RouterModule } from '@angular/router';
import { DellComponent } from './components/dell.component';
import { CanonComponent } from './components/canon.component';
import { NikiComponent } from './components/niki.component';
import { authGuards } from './auth/auth.guards';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LaptopComponent,
    CameraComponent,
    ClothesComponent,
    DellComponent,
    CanonComponent,
    NikiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"laptops/:p_id/:p_name/:p_cost",component:LaptopComponent,children:[{path:"dell",component:DellComponent}],canActivate:[authGuards]},
                          {path:"cameras",component:CameraComponent,children:[{path:"canon",component:CanonComponent}],canDeactivate:[authGuards]},
                          {path:"clothes/:p_id/:p_name/:p_cost",component:ClothesComponent,
                           children:[{path:"niki/:p_id/:p_name/:p_cost",component:NikiComponent}],canActivateChild:[authGuards]}])
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
