import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'clothes',
  templateUrl: './clothes.component.html',
  styles: [
  ]
})
export class ClothesComponent implements OnInit {
  var_three:any;
  p_id:number=666;
  p_name:string="p_six";
  p_cost:number=60000;
  constructor(public route:ActivatedRoute) {
    this.var_three = this.route.snapshot.params["p_id"]+"....."+this.route.snapshot.params["p_name"]+"...."+this.route.snapshot.params["p_cost"];
   }

  ngOnInit(): void {
  }

}
