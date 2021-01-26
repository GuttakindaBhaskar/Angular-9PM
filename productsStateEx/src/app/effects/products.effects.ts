import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import * as allActions from "../.";
import { productsService } from "../services/products.service";
import { mergeMap,map,catchError } from "rxjs/operators";
import { Product } from "../modal/product.modal";
@Injectable({
    providedIn:"root"
})
export class productsEffects{
    constructor(private service:productsService,
                private actions:Actions){}

    @Effect()
    public getProducts:Observable<Action> = this.actions.pipe(
         ofType(allActions.ProductActionTypes.ProductsLoad),
         mergeMap(()=>this.service.getAllProducts().pipe(map(
             (posRes:Product[])=>{ return new allActions.ProductsLoadSuccess(posRes) }
         ),catchError(
             (error)=>of(new allActions.ProductsLoadFail(error))
         )))
    );
};