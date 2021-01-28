//receives the data from reducer and handovers to component

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { initialStateI } from "../reducer/products.reducer";

const obj = createFeatureSelector<initialStateI>("products");

export const allProducts = createSelector(obj,(state:initialStateI)=>{
    return state;
});