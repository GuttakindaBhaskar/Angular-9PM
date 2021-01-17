import {Component,QueryList,ViewChild, ViewChildren} from "@angular/core";
import {secondComponent} from "./second.component";
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class firstComponent{
    
    /*
        @ViewChild(secondComponent,{static:true})
        public obj:secondComponent;

        clickMe():any{
            this.obj.msg1 = "Hello_1";
            this.obj.msg2 = "Welcome";
        };
        //Note : ViewChild have the capability to reflect its effect on only first occurance.
    */

    @ViewChildren(secondComponent) mapobj:QueryList<secondComponent> = new QueryList();
    my_array:any[];

    ngAfterViewInit(){
        this.my_array = this.mapobj.toArray();
    };

    clickMe(){
        this.my_array.forEach((element,index)=>{
            element.msg1 = "Hello";
            element.msg2 = "Welcome";
        });
    };

};



