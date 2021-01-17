import { Component } from "@angular/core";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export class secondComponent{
    public msg1:string;
    public msg2:string;
    constructor(){
        this.msg1 = "Angular11";
        this.msg2 = "Deno";
    };
};