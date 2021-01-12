import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class authGuards{
    canActivate():boolean{
        //Design
        return confirm(`do you want to enter into laptops ??`);
    };

    canDeactivate():boolean{
        return confirm(`do you want to leave cameras ??`);
    };

    canActivateChild():boolean{
        return confirm(`do you want to enter into Niki ??`);
    };
};