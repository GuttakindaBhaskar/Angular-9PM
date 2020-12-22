import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Records } from "../model/customers.model";
@Injectable({
    providedIn:"root"
})
export class customersService{
    constructor(private http:HttpClient){}
    getCustomers():Observable<Records>{
        return this.http.get<Records>("https://www.w3schools.com/angular/customers.php");
    };
};