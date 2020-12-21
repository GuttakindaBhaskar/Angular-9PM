//import Injectable
//Injectable used to create the service
import { Injectable } from "@angular/core";
//import HttpClient
//HttpClient is the predefined class in Angular
//HttpClient used to connect to server
import { HttpClient } from "@angular/common/http";
//import Observable
//Observable used to make the asynchronous calls
import { Observable } from "rxjs";
//import modal
import { CountriesModel } from "../model/countries.model";
@Injectable({
    providedIn : "root"
})
export class countriesService{
    //dependency injection
    constructor(private http:HttpClient){}
    //create the function and make the asynchronous
    getCountries():Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>("http://restcountries.eu/rest/v2/all");
    };
}