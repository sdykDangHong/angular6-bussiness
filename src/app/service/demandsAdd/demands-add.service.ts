import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemandsAddService {

  constructor(
    private http:HttpClient
  ) { }
  getServiceTags(){
    return new Promise(resolve => {
      this.http.get(`/gate/sdyk-border-service/border/v202/serviceTags.shtml`).subscribe((res:any)=>{
        resolve(res.data)
      })
    })
  }
}
