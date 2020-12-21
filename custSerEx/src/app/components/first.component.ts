import { Component } from "@angular/core";
import { myService } from "../services/my.service";
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class firstComponent{
    public message:string;
    constructor(public obj:myService){}
    ngOnInit(){
        this.message = this.obj.getAcDetails();
    };
};