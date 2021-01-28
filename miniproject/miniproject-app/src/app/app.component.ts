import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { initialStateI } from './reducer/products.reducer';
import * as allActions from ".";
import { allProducts } from './selector/product.selector';
import { Product } from './modal/product.modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    
    products:Product[];
    loading:boolean;
    message:any;

    constructor(private store:Store<initialStateI>){}

    ngOnInit(){
      this.store.dispatch(new allActions.GetProducts());

      const products$ = this.store.pipe(select(allProducts));
      
      products$.subscribe((res)=>{
         this.products = res.products;
         this.loading = res.loading;
         this.message = res.message;
         console.log(this.products,this.loading,this.message);
      });
      

      
    }
}
