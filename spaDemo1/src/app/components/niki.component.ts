import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'niki',
  templateUrl: './niki.component.html',
  styles: [
  ]
})
export class NikiComponent implements OnInit {
  var_six:any;
  constructor(public route:ActivatedRoute) {
    this.var_six = this.route.snapshot.params["p_id"]+"...."+this.route.snapshot.params["p_name"]+"...."+this.route.snapshot.params["p_cost"];
   }

  ngOnInit(): void {
  }

}
