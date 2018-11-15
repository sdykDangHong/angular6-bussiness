import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../../service/login/login.service";

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['../register.component.css']
})
export class RegisterStepOneComponent implements OnInit {
  public inputList:any[]=[
    {
      icon:'http://www.315free.com/static/img/login_user.png',
      imgAlt:"账号",
      name:"mobile",
      inputType:"text",
      inputPlaceHolder:'请输入手机号',
      yzm:false
    },
    {
      icon:'http://www.315free.com/static/img/login_pwd.png',
      imgAlt:"密码",
      name:"password",
      inputType:"password",
      inputPlaceHolder:'请输入密码',
      yzm:false
    },
    {
      icon:'http://www.315free.com/static/img/login_send.png',
      imgAlt:"验证码",
      name:"yzm",
      inputType:"text",
      inputPlaceHolder:'请输入验证码',
      yzm:true
    }
  ]
  public yzmCode:any={
    imgStr:""
  }
  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit() {
    this.getCode()
  }
  getCode(){
    this.loginService.getCode().then((res:any)=>{
      this.yzmCode=res;
    })
  }
}
