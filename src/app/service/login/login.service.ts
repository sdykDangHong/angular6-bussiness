import {Injectable} from '@angular/core';
import { HttpClient , HttpParams } from "@angular/common/http"
import {CommonStoreService} from "../commonStore/common-store.service";
import {Router} from "@angular/router";
import {UtilService} from "../common/util.service";
@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private userInfo:object;
  constructor(
    private $http:HttpClient,
    private commonStore:CommonStoreService,
    private router:Router,
    private util:UtilService
  ) {
  }
  getCode(){
    return new Promise((resolve, reject) => {
      this.$http.get("/gate/sdyk-bussiness/customer/img.shtml").subscribe(res=>{
        resolve(res['data'])
      },error=>{
        reject(error)
      })
    })
  }
  login(data:object,codePic:object){
    let params=new HttpParams()
      .set("mobile",data['mobile'])
      .set("password",data['password'])
      .set("imgCode",data['code'].toUpperCase())
      .set("key",codePic['key'])
      .set("source",'2')
    this.$http.post("/gate/sdyk-bussiness/customer/login.shtml",null,{
      params:params
    }).subscribe(res=>{
      this.util.setCookie('token',res['data']['token'],180)
      this.commonStore.submitUserInfo(res['data'])
    })
  }
}
