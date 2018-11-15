import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CommonStoreService} from "../commonStore/common-store.service";

@Injectable({
  providedIn: 'root'
})
export class FreelancerProjectsService {

  constructor(
    private http:HttpClient,
    private commonStore:CommonStoreService
  ) { }
  getFreelancerProjectList(page:number=1,pageSize:number=10,sort:number=1,title:string=""){
    let params = new HttpParams()
      .set('freelancerId',this.commonStore.getUserInfo()['customerId'])
      .set("pageNum",`${page}`)
      .set('pageSize',`${pageSize}`)
      .set("sort",`${sort}`)
      .set('projectName',title)
    return new Promise(resolve => {
      this.http.get('/gate/sdyk-bussiness/agreement/selectFreelancerProjects.shtml',{
        params:params
      }).subscribe((res:any)=>{
        resolve(res.data)
      })
    })

  }
}
