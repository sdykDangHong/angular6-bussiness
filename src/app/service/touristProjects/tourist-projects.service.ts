import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CommonStoreService} from "../commonStore/common-store.service";

@Injectable({
  providedIn: 'root'
})
export class TouristProjectsService {
  constructor(
    private $http:HttpClient,
    private commonStore:CommonStoreService
  ) { }
  getTouristProjects(page:number=1,pageSize:number=10,showCustomerId:boolean=false){
    let params;
    if(showCustomerId){
      params=new HttpParams()
        .set('start',`${page}`)
        .set('length',`${pageSize}`)
        .set('customerId',this.commonStore.getUserInfo()['customerId'])
    }else{
      params=new HttpParams()
        .set('start',`${page}`)
        .set('length',`${pageSize}`)
    }
    return new Promise(resolve => {
      this.$http.get('/rcmd/project/rcmd',{
        params:params
      }).subscribe(res=>{
        resolve(res)
      })
    })
  }
}
