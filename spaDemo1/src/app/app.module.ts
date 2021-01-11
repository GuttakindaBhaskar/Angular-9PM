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
    RouterModule.forRoot([{path:"laptops",component:LaptopComponent,children:[{path:"dell",component:DellComponent}]},
                          {path:"cameras",component:CameraComponent,children:[{path:"canon",component:CanonComponent}]},
                          {path:"clothes",component:ClothesComponent,children:[{path:"niki",component:NikiComponent}]}])
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
