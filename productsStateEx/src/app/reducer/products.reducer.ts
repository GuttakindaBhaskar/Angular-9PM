//reducer
//reducer receives the data from effects and handovers to selector

import { ProductActions, ProductActionTypes } from "../actions/products.action";
import { Product } from "../modal/product.modal";

//define interface with datatypes
export interface initialStateI{
    loading:boolean;
    message:any;
    products:Product[]
};

const initialState:initialStateI = {
    loading:false,
    message:"",
    products:[]
};

export function productsReducer(state=initialState,action:ProductActions):initialStateI{

        switch(action.type){
            case ProductActionTypes.ProductsLoad:
                return{
                    ...state,
                    loading:false,
                    message:"",
                    products:[]
                }
            case ProductActionTypes.ProductsLoadSuccess:
                return{
                    ...state,
                    message:"Products Loading Success",
                    products:action.payload,
                    loading:true
                }
            case ProductActionTypes.ProductsLoadFail:
                return{
                    ...state,
                    message:action.error,
                    products:[],
                    loading:true
                }
            default:
                return state;
        }

};