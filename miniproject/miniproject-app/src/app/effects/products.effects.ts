import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";

import { productService } from "../services/products.service";
import { catchError, mergeMap,map } from "rxjs/operators";
import * as allActions from "../.";
import { Product } from "../modal/product.modal";
@Injectable({
    providedIn:"root"
})
export class productEffects{
    constructor(public actions:Actions,
                public service:productService){}

    @Effect()
    public getProducts:Observable<Action> = this.actions.pipe(
        ofType(allActions.ProductActionTypes.GetProducts),
        mergeMap(()=>this.service.getAllProducts().pipe(map((posRes:Product[])=>{
            return new allActions.GetProductsSuccess(posRes);
        }),catchError((error)=>of(new allActions.GetProductsFail(error)))))
    );

};