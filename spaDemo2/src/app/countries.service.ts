import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CountriesModel } from "./countries.model";
@Injectable({
    providedIn:"root"
})
export class countriesService{
    constructor(public http:HttpClient){}
    getCountries():Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(`https://restcountries.eu/rest/v2/all`);
    }
};
