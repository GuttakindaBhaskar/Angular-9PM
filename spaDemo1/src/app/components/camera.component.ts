import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'camera',
  templateUrl: './camera.component.html',
  styles: [
  ]
})
export class CameraComponent implements OnInit {
  var_two:any;
  constructor() { 
    this.var_two = "Cameras Soon...!";
  }

  ngOnInit(): void {
  }

}
