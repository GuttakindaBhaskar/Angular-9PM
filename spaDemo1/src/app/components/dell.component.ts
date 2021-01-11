import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dell',
  templateUrl: './dell.component.html',
  styles: [
  ]
})
export class DellComponent implements OnInit {
  var_four:any;
  constructor() { 
    this.var_four = "Dell Computers Come Soon...!";
  }

  ngOnInit(): void {
  }

}
