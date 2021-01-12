import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'laptop',
  templateUrl: './laptop.component.html',
  styles: [
  ]
})
export class LaptopComponent implements OnInit {
  var_one:any;
  constructor(public route:ActivatedRoute) { 
    this.var_one = this.route.snapshot.params["p_id"]+"...."+this.route.snapshot.params["p_name"]+"...."+this.route.snapshot.params["p_cost"];
  }

  ngOnInit(): void {
  }

}
