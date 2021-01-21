import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    employeeDetails:FormGroup;
    constructor(){
        this.employeeDetails = new FormGroup({
           "fname":new FormControl("",[Validators.required,
                                       Validators.minLength(3),
                                       Validators.maxLength(6)]),
           "lname":new FormControl(),
           "email":new FormControl(),
           "addr":new FormGroup({
              "city":new FormControl(),
              "addresslane":new FormControl()
           }),
           "gender":new FormControl(),
           "country":new FormControl()
        })
    }

    register(){
        console.log(this.employeeDetails.value)
    };
}
