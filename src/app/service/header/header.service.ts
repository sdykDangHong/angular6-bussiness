import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CommonStoreService} from "../commonStore/common-store.service";
import {UtilService} from "../common/util.service";
import {NzMessageService} from "ng-zorro-antd";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private router:Router,
    private $http:HttpClient,
    private commonStore:CommonStoreService,
    private util:UtilService,
    private message:NzMessageService
  ) { }
  logout(){
    this.$http.get('/gate/sdyk-bussiness/customer/logout.shtml').subscribe(res=>{
      this.message.success("您已成功退出登录")
      this.commonStore.submitUserInfo({})
      this.util.setCookie("token",'',-1)
      this.router.navigate(['/login'])
    })
  }
  changeAuth(){
    let userinfo=this.commonStore.getUserInfo()
    let params= new HttpParams()
      .set('token',userinfo['token'])
    this.$http.post("/gate/sdyk-bussiness/customer/change-auth",null,{
      params:params
    }).subscribe((res:any)=>{
      this.commonStore.submitUserInfo({...userinfo,loginState:res['data']})
      if(res.data==1){
        this.router.navigate(['/demander/projects'])
      }else{
        this.router.navigate(['/freelancer/projects'])
      }
    })
  }
}
