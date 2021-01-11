import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'niki',
  templateUrl: './niki.component.html',
  styles: [
  ]
})
export class NikiComponent implements OnInit {
  var_six:any;
  constructor() {
    this.var_six = "NiKi Shirts Soon....!";
   }

  ngOnInit(): void {
  }

}
