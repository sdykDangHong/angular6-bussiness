import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TouristProjectsService {
  constructor(
    private $http:HttpClient
  ) { }
  getTouristProjects(page:number=1,pageSize:number=10){
    let params=new HttpParams()
      .set('start',`${page}`)
      .set('length',`${pageSize}`)
    return new Promise(resolve => {
      this.$http.get('/rcmd/project/rcmd',{
        params:params
      }).subscribe(res=>{
        resolve(res)
      })
    })
  }
}
