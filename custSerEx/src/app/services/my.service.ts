import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class myService{
    getAcDetails():string{
        return "AC Details from AWS Server Soon...!";
    };
    getCameraDetails():string{
        return "Camera Details from AWS Server Soon....!";
    };
};