import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CommonStoreService} from "../commonStore/common-store.service";

@Injectable({
  providedIn: 'root'
})
export class DemanderProjectsService {

  constructor(
    private http:HttpClient,
    private commonStore:CommonStoreService
  ) { }
  getDemandState(){
    let params=new HttpParams()
      .set('customerId',this.commonStore.getUserInfo()['customerId'])
    return new Promise(resolve => {
      this.http.post("/gate/sdyk-bussiness/demand/demandsStaus.shtml",null,{
        params:params
      }).subscribe((res:any)=>{
        resolve(res.data)
      })
    })
  }
  getDemandList(page:number=1,pageSize:number=10,sort:number=1,title:string=""){
    let params=new HttpParams()
      .set('customerId',this.commonStore.getUserInfo()['customerId'])
      .set('start',`${page}`)
      .set('length',`${pageSize}`)
      .set('sort',`${sort}`)
      .set('title',`${title}`)
    return new Promise(resolve => {
      this.http.post('/gate/sdyk-bussiness/demand/just-project.shtml',null,{
        params:params
      }).subscribe((res:any)=>{
        resolve(res.data)
      })
    })


  }
}
