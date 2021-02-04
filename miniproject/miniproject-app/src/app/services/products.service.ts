import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../modal/product.modal";

@Injectable({
    providedIn:"root"    
})
export class productService{
    constructor(private http:HttpClient){}
    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>(`http://server9pm-env.eba-hipzi2st.ap-south-1.elasticbeanstalk.com/products`);
    }
}