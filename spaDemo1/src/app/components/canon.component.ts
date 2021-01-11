import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'canon',
  templateUrl: './canon.component.html',
  styles: [
  ]
})
export class CanonComponent implements OnInit {
  var_five:any;
  constructor() {
    this.var_five = "Canon Cameras Soon...!";
   }

  ngOnInit(): void {
  }

}
