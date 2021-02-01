import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgHttpLoaderModule } from "ng-http-loader";
import { AppComponent } from "./app.component";
import { productEffects } from "./effects/products.effects";
import { productsReducer } from "./reducer/products.reducer";
import { productService } from "./services/products.service";
@NgModule({
    declarations:[AppComponent],
    imports:[
        HttpClientModule,
        StoreModule.forRoot({products:productsReducer}),
        EffectsModule.forRoot([productEffects]),
        NgHttpLoaderModule.forRoot(),
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild([{path:"",component:AppComponent}])
    ],
    providers:[productService],
    exports:[AppComponent]
})
export class productsModule{}