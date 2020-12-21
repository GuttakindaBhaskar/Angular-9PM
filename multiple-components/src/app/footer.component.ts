import { Component } from "@angular/core";
@Component({
    selector : "ashokit-footer",
    templateUrl : "./footer.component.html",
    styleUrls : ['./footer.component.css']
})
export class FooterComponent{
    private title:string;
    constructor(){
        this.title = "copyright@ashokit.com"
    };
    getTitle():string{
        return this.title;
    }
};