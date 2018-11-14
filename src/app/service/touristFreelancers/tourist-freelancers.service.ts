import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TouristFreelancersService {

  constructor(
    private http:HttpClient
  ) { }
  getFreelancers(page:number=1,pageSize:number=10){
    let params=new HttpParams()
      .set('start',`${page}`)
      .set('length',`${pageSize}`)
    return new Promise((resolve) => {
      this.http.get('/rcmd/user/noLogin',{
        params:params
      }).subscribe((res:any)=>{
        resolve(res.data.content)
      })
    })
  }
}
