import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UtilService} from "../common/util.service";

@Injectable({
  providedIn: 'root'
})
export class CommonStoreService {
  private userInfo:object={}
  public userInfoUpdated:Subject<object>=new Subject<object>();
  constructor(
    private $http:HttpClient,
    private Util:UtilService
  ) { }
  submitUserInfo(info){
    this.userInfo=info;
    this.userInfoUpdated.next(this.userInfo)
  }
  getUserInfo(){
    return this.userInfo
  }
  resetUserInfo(){
    let token=this.Util.getCookie('token')
    if(!token){return false}
    let params=new HttpParams()
      .set('token',token)
    this.$http.post('/gate/sdyk-bussiness/customer/getUserInfo.shtml',{},{
      params:params
    }).subscribe(res=> {
      this.userInfo = res['data'];
      this.userInfoUpdated.next(res['data'])
    })
  }
}
