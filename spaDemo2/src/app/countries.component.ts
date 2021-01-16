import { Component } from "@angular/core";
import { countriesService } from "./countries.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CountriesModel } from "./countries.model";
import { SpinnerVisibilityService } from "ng-http-loader";
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    
    countries:CountriesModel[];
    constructor(public service:countriesService,
                public spinner:SpinnerVisibilityService){}
    ngOnInit(){
        this.spinner.show();
        this.service.getCountries().subscribe((posRes)=>{
            this.countries = posRes;
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
            this.spinner.hide();
        });
    };
};