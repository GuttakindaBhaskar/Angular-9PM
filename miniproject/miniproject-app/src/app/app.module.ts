import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';


export const appRoutes:Routes = [{
    path:"products", loadChildren:()=>import("./products.module").then(obj=>obj.productsModule),canLoad:[authGuard]
}];

export const lazyRoutes:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


@NgModule({
  declarations: [
    mainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    lazyRoutes
  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class AppModule { }
