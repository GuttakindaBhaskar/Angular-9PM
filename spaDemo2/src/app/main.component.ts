import { Component } from "@angular/core";
import { Spinkit } from 'ng-http-loader';
@Component({
    selector:"main",
    templateUrl:"./main.component.html"
})
export class MainComponent{
    public spinkit = Spinkit;
}