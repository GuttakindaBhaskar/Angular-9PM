import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Product } from "../modal/product.modal";

export enum ProductActionTypes{
    ProductsLoad = '[Products] Load',
    ProductsLoadSuccess = '[Products] Load Success',
    ProductsLoadFail = '[Products] Load Fail'
};

export class ProductsLoad implements Action{
    public readonly type = ProductActionTypes.ProductsLoad;
};

export class ProductsLoadSuccess implements Action{
    public readonly type = ProductActionTypes.ProductsLoadSuccess;
    public constructor(public payload:Product[]){}
};

export class ProductsLoadFail implements Action{
    public readonly type = ProductActionTypes.ProductsLoadFail;
    public constructor(public error:HttpErrorResponse){}
};

export type ProductActions = ProductsLoad | ProductsLoadSuccess | ProductsLoadFail;