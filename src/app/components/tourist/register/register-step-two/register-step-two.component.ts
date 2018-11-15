import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['../register.component.css']
})
export class RegisterStepTwoComponent implements OnInit {
  public inputList:any[]=[
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
      imgAlt:"确认密码",
      name:"confirmPassword",
      inputType:"text",
      inputPlaceHolder:'请再次输入密码',
      yzm:false
    }
  ]
  public userState:number=-1;
  public agreementChecked:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
