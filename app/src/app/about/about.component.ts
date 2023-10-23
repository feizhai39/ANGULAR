import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  serverUserList:any = [];
  name = "";
  job = "";
  createUserResponse = '';
  pageName = 'this is about page';
  currentDate = new Date();
  price = 78;
  num1 = 12;
  num2 = 89;
  constructor(private httpClient:HttpClient,private common: CommonService, private router: Router) { }

    ngOnInit():  void {
      
    }

    getUserList(){
      this.httpClient.get("https://reqres.in/api/users?page=2").subscribe((res:any)=>{
        console.log(res);
        this.serverUserList= res['data'];
      })
    }
    createUser(){
      if(this.name == ""){
        //below method will call the method in commonservice
        this.common.showAlert("Name should not be empty")
        return;
      }
      if(this.job == ""){
        //below method will call the method in commonservice
        this.common.showAlert("Job should not be empty")
        return;
      }
      //https://reqres.in/api/users post
      let params = {
        "name": this.name,
        "job": this.job    
      }
      this.httpClient.post("https://reqres.in/api/users", params).subscribe((res:any)=>{
        console.log(res);
        this.createUserResponse = "User is created at "+res['createdAt'];
      })
    }

    navigateToContact(){
      this.router.navigateByUrl("contact?email=test@gmail.com");
      

    }

}
