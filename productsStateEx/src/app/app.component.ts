import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { initialStateI } from './reducer/products.reducer';
import * as allActions from ".";
import { Product } from './modal/product.modal';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'productsStateEx';

    products:Product[];
    loading:boolean;
    message:any;
    
    constructor(private store:Store<initialStateI>,
               private spinner:SpinnerVisibilityService){}

    ngOnInit(){
       //dispatch
       this.store.dispatch(new allActions.ProductsLoad());

       //subscription
       this.spinner.show();
       const result = this.store.pipe(select(allActions.allProducts));
       

       result.subscribe((res)=>{
          this.products = res.products;
          this.loading = res.loading;
          this.message = res.message;
          
      })
      console.log(this.products);
       this.spinner.hide();
    }
}
