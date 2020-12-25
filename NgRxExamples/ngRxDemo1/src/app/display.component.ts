import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";

@Component({
    selector : "display",
    templateUrl : "./display.component.html"
})
export class displayComponent{
    public products:any;
    constructor(public store:Store<AppState>){
        this.products = this.store.select(state=>state.product);
    };
}