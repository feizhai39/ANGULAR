import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    pageTitle = "this is from TS file";
    num1 =45;
    num2 = 98;
    message = '';
    email = '';
    password = '';

    personList = ["test", "test234", "test4565"];//index array
    personDetailsList=[
      {"name":"sample","age":45,"email":"sample@gmail.com"},
      {"name":"sample2","age":55,"email":"sample1@gmail.com"},
      {"name":"sample3","age":65,"email":"sample2@gmail.com"},
      {"name":"sample4","age":75,"email":"sample3@gmail.com"},
    ]
      
    constructor() {}

    ngOnInit(): void{
      
    }
    validate(){
      if(this.email == 'test@gmail.com' && this.password == 'test'){
        alert("You are correct");
      }else{
        alert("You are wrong..");
      }
    }
}
