import {Component, OnInit} from '@angular/core';
import {CommonStoreService} from "./service/commonStore/common-store.service";
import {LoadingService} from "./service/common/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public loading:boolean=false;
  constructor(
    private commonStore:CommonStoreService,
    private loadingService:LoadingService
  ){
    this.loading=this.loadingService.loadingStatus
  }
  ngOnInit(){
    this.commonStore.resetUserInfo()
    this.loadingService.loadingStatusUpdated.subscribe(status=>{
      this.loading=status
    })
  }
}
