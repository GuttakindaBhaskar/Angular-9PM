import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clothes',
  templateUrl: './clothes.component.html',
  styles: [
  ]
})
export class ClothesComponent implements OnInit {
  var_three:any;
  constructor() {
    this.var_three = "Clothes Soon...!";
   }

  ngOnInit(): void {
  }

}
