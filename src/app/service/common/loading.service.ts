import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loadingStatus:boolean=false;
  public loadingStatusUpdated:Subject<boolean>=new Subject<boolean>()
  constructor() { }
  showLoading(){
    this.loadingStatus=true;
    this.loadingStatusUpdated.next(true)
  }
  hideLoading(){
    this.loadingStatus=false;
    this.loadingStatusUpdated.next(false)
  }
  getLoadingStatus(){
    return new Promise((resolve, reject) => {
      resolve(this.loadingStatus)
    })
  }
}
