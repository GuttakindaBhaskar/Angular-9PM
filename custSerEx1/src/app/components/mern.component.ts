import { Component } from "@angular/core";
import { mernService } from "../services/mern.service";
@Component({
    selector:"mern",
    templateUrl:"./mern.component.html"
})
export class mernComponent{
    message:any;
    constructor(private service:mernService){}
    ngOnInit(){
        this.message = this.service.mern();
    };
};