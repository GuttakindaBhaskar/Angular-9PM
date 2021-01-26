import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../modal/product.modal";

@Injectable({
    providedIn:"root"
})
export class productsService{
    constructor(private http:HttpClient){} 
    
    public getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>(`http://localhost:8080/api/products`);
    }
}