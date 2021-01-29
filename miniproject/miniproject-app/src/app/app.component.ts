import { Component, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { initialStateI } from './reducer/products.reducer';
import * as allActions from ".";
import { allProducts } from './selector/product.selector';
import { Product } from './modal/product.modal';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    products:Product[];
    loading:boolean;
    message:any;
    dataSource:MatTableDataSource<any>;
    displayedColumns:string[] = [`_id`,`p_id`,`p_name`,`p_cost`,`countInStock`,`numReviews`,`image`];

    
    @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;
    
    constructor(private store:Store<initialStateI>,
               private spinner:SpinnerVisibilityService){}

    ngOnInit(){
      this.store.dispatch(new allActions.GetProducts());

      if(this.loading){
        this.spinner.show();
      }
      const products$ = this.store.pipe(select(allProducts));
      


      products$.subscribe((res)=>{
         this.products = res.products;
         this.loading = res.loading;
         this.message = res.message;
         console.log(this.products,this.loading,this.message);
         this.dataSource = new MatTableDataSource(this.products);
         this.dataSource.paginator = this.paginator;
      });
  

      
    }
}
