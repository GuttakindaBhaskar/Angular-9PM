import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //model
    login_details:any = {"uname":"Sai","upwd":"Sai"};


    login():any{
      if(this.login_details.uname === "admin" && this.login_details.upwd === "admin"){
          alert("Login Success");
      }else{
        alert("Login Fail");
      }
    }

    count:number = 0;

    getColor():any{
      return "pink";
    }

    loginFn(){
      if(this.login_details.uname === "admin" && this.login_details.upwd === "admin"){
          alert("Login Success");
      }else{
        alert("Login Fail");
      }
    }


    arr:any[] = [{"id":111,
                  "p_name":"p_one",
                  "p_cost":10000},
                 {"id":222,
                 "p_name":"p_two",
                 "p_cost":20000},
                 {"id":333,
                 "p_name":"p_three",
                 "p_cost":30000},
                 {"id":444,
                 "p_name":"p_four",
                 "p_cost":40000},
                 {"id":555,
                 "p_name":"p_five",
                 "p_cost":50000}];



}
