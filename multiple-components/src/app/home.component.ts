import { Component } from "@angular/core";
@Component({
    selector : "ashokit-home",
    templateUrl:"./home.component.html",
    styleUrls:['./home.component.css']
})
export class HomeComponent{
    private ac_image:string;
    private camera_image:string;
    private jeans_image:string;
    constructor(){
        this.ac_image = "https://allproductsc.s3.ap-south-1.amazonaws.com/AC/ac1.jpeg";
        this.camera_image = "https://allproductsc.s3.ap-south-1.amazonaws.com/Camera/camera1.jpeg";
        this.jeans_image = "https://allproductsc.s3.ap-south-1.amazonaws.com/Cloths/jeans1.jpeg";
    };
    public getAcImage():string{
        return this.ac_image;
    };
    public getCameraImage():string{
        return this.camera_image;
    };
    public getJeansImage():string{
        return this.jeans_image;
    };
};