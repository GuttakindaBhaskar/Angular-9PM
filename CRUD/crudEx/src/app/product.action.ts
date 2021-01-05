import { Product } from "./product.model";
import { createAction,props } from "@ngrx/store";


export enum ProductEntityAction{

    LoadProducts = "[Product] Load Products",
    LoadProductsSuccess = "[Product] Load Products Success",
    LoadProductsFail = "[Product] Load Products Fail"
   

};


export const loadProducts = createAction(ProductEntityAction.LoadProducts);
export const loadProductsSuccess = createAction(ProductEntityAction.LoadProductsSuccess,props<{data:Product[]}>());
export const loadProductsFaile = createAction(ProductEntityAction.LoadProductsFail,props<{error:Error | "any"}>());

