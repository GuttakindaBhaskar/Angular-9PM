import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    myForm:FormGroup;
    
    constructor(public store:Store<AppState>){
      this.myForm = new FormGroup({
         name : new FormControl(null,[Validators.required]),
         price : new FormControl(null,[Validators.required])
      });
      
      
      
    };




    addProduct():any{
        
        this.store.dispatch({
          type:"ADD_PRODUCT",
          payload:<Product> this.myForm.value
        })
    }
}
