import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../../service/login/login.service";

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css'],
  providers:[LoginService]
})
export class LoginBodyComponent implements OnInit {
  private form:object={
    mobile:"",
    password:"",
    code:""
  }
  private codePic:object={};
  constructor(
    private loginService:LoginService
  ) { }
  getCode(){
    this.loginService.getCode().then(res=>{
      this.codePic=res;
    })
  }
  login(){
    this.loginService.login(this.form,this.codePic)
  }
  ngOnInit() {
    this.getCode()
  }

}
