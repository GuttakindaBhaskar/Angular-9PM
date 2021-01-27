import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "./countries.modal";
@Injectable({
    providedIn:"root"
})
export class countryService{
    constructor(private http:HttpClient){}
    public getCountries():Observable<Country[]>{
        return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/all`);
    };
};