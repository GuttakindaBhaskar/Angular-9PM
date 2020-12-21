import { Component } from "@angular/core";
@Component({
    selector : "ashokit-header",
    templateUrl : "./header.component.html",
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    private title:string;
    constructor(){
        this.title = "ECommerce Application"
    }
    public getTitle():string{
        return this.title;
    };
};