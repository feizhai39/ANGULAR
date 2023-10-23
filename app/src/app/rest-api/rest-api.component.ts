import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit{
  userList = [];
  email = '';
  name = '';
  constructor(private httpClient:HttpClient) {}
  ngOnInit(): void {
    //below method will call during the page loads
   // this.getUserList();
  }

  // getUserList(){
  //   this.httpClient.get(this.BASEURL+"user/list").subscribe(res=>{
  //     this.userList = res;
  //   })
  // }

  // createUser(){
  //   if(this.selectedForUpdate != ''){
  //     this.updateUserApi();
  //     return;
  //   }
  //   let params ={
  //     "email":this.email,
  //     "name":this.name
  //   } 
  //   this.httpClient.post(this.BASEURL+"user/create",params).subscribe(res=>{
  //     alert("User is createFind.");
  //     this.name ='';//clear the field
  //     this.email='';//clear the field
  //     this.getUserList();//call the user list.
  //   })
  // }

  // updateUserApi(){
    
  //
 }
