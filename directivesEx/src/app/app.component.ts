import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //model
    login_details:any = {"uname":"","upwd":""};


    login():any{
      if(this.login_details.uname === "admin" && this.login_details.upwd === "admin"){
          alert("Login Success");
      }else{
        alert("Login Fail");
      }
    }

    count:number = 0;

}
