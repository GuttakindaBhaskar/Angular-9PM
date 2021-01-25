import { Action } from "@ngrx/store";
import { Product } from "../modal/products.modal";
import { HttpErrorResponse } from "@angular/common/http";
export enum ProductActionTypes{
    GetProducts = 'Get Products',
    GetProductsSuccess = 'Get Products Success',
    GetProductsFail = 'Get Products Fail'
};
export class GetProducts implements Action{
    public readonly type = typeof ProductActionTypes.GetProducts;
};
export class GetProductsSuccess implements Action{
    public readonly type = typeof ProductActionTypes.GetProductsSuccess;
    constructor(public payload:Product[]){}
};
export class GetProductsFail implements Action{
    public readonly type = typeof ProductActionTypes.GetProductsFail;
    constructor(public error:HttpErrorResponse){}
};

export type ProductAction = GetProducts |  GetProductsSuccess |  GetProductsFail;