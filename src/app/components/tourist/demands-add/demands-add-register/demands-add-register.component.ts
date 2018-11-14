import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../../../service/login/login.service";

@Component({
  selector: 'app-demands-add-register',
  templateUrl: './demands-add-register.component.html',
  styleUrls: ['./demands-add-register.component.css']
})
export class DemandsAddRegisterComponent implements OnInit {
  public registerAgreementChecked:boolean=false;
  public picCode:object={
    imgStr:""
  };
  @Output() demandsAddRegister:EventEmitter<any>=new EventEmitter<any>();
  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit() {
    this.getPicCode()
  }
  getPicCode(){
    this.loginService.getCode().then(res=>{
      this.picCode=res;
    })
  }
  register(){
    if(!this.registerAgreementChecked){alert("未同意协议");return false}
    this.demandsAddRegister.emit()
  }
}
