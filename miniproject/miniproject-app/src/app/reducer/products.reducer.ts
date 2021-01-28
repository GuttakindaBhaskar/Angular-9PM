import { HttpErrorResponse } from "@angular/common/http";
import { ProductActions, ProductActionTypes } from "../actions/product.action";
import { Product } from "../modal/product.modal";

export interface initialStateI{
    loading:boolean;
    products:Product[];
    message:any;
};

const initialState = {
    loading : false,
    products : [],
    message : ""
};

export function productsReducer(state=initialState,action:ProductActions):initialStateI{
    switch(action.type){
        case ProductActionTypes.GetProducts:
            return{
                ...state,
                loading:false,
                products:[],
                message:""
            }
        case ProductActionTypes.GetProductsSuccess:
            return{
                ...state,
                loading:true,
                products:action.payload,
                message:"Products Loaded Successfully"   
            }
        case ProductActionTypes.GetProductsFail:
            return{
                ...state,
                loading:true,
                products:[],
                message:action.error
            }

        default:
            return state;
    }
};