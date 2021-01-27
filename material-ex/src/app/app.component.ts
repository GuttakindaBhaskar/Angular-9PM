import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Country } from './countries.modal';
import { countryService } from './countries.service';
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    countries:Country[];
    public displayesColumns:string[] = [`name`,`capital`,`population`,`nativeName`,`flag`];
    constructor(private service:countryService){}
    public dataSource:MatTableDataSource<any>;
    ngOnInit(){
      this.service.getCountries().subscribe((posRes)=>{
          this.countries = posRes;
          this.dataSource = new MatTableDataSource(this.countries);
      },(errRes:HttpErrorResponse)=>{
          console.log(errRes);
      });
    }
}
