import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { Customers } from "../model/customers.model";
import { customersService } from "../services/customers.service";

@Component({
    selector : "customers",
    templateUrl : "./customers.component.html"    
})
export class customersComponent{
    response:Customers[];
    constructor(private service:customersService){}
    ngOnInit(){
        this.service.getCustomers().subscribe((posRes)=>{
            this.response = posRes.records;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};