import { Component } from "@angular/core";
import { countriesService } from "../services/countries.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CountriesModel } from "../model/countries.model";
@Component({
    selector : "countries",
    templateUrl : "./countries.component.html"
})

export class countriesComponent{
    response:CountriesModel[];
    constructor(private service:countriesService){}
    ngOnInit(){
        this.service.getCountries().subscribe((posRes)=>{
            this.response = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};
