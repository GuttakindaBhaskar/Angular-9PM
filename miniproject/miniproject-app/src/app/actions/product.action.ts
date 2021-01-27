import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Product } from "../modal/product.modal";
export enum ProductActionTypes{
    GetProducts = '[Product] Get Products',
    GetProductsSuccess = '[Product] Get Products Success',
    GetProductsFail = '[Product] Get Prosucts Fail'
};
export class GetProducts implements Action{
    public readonly type = typeof ProductActionTypes.GetProducts;
};
export class GetProductsSuccess implements Action{
    public readonly type = typeof ProductActionTypes.GetProductsSuccess;
    public constructor(public payload:Product[]){}
};
export class GetProductsFail implements Action{
    public readonly type = typeof ProductActionTypes.GetProductsFail;
    public constructor(public error:HttpErrorResponse){}
};  
export type ProductActions = GetProducts | GetProductsSuccess |  GetProductsFail;