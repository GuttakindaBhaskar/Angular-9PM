import { Product } from "./product.model";
import { Action } from "@ngrx/store";
export function addProductReducer(state:Product[] = [], action){
    switch(action.type){
        case "ADD_PRODUCT":
            
            return [...state,action.payload]
        default:
            return state;
    }
}