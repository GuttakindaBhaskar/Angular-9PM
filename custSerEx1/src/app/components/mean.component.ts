import { Component } from "@angular/core";
import { meanService } from "../services/mean.service";
@Component({
    selector : "mean",
    templateUrl : "./mean.component.html"
})
export class meanComponent{
   message:any;
   constructor(private service:meanService){}
   ngOnInit(){
        this.message = this.service.mean();
   };
};