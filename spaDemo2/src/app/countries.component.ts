import { Component } from "@angular/core";
import { countriesService } from "./countries.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CountriesModel } from "./countries.model";
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    countries:CountriesModel[];
    constructor(public service:countriesService){}
    ngOnInit(){
        this.service.getCountries().subscribe((posRes)=>{
            this.countries = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};