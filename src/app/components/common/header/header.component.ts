import {Component, Input, OnInit} from '@angular/core';
import {CommonStoreService} from "../../../service/commonStore/common-store.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../../service/header/header.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public isHome : boolean =false;
  public userInfo:object={};
  public menuList:any[]=[
    // {
    //   value:1,
    //   label:"个人中心"
    // },
    {
      value:2,
      label:"切换身份"
    },
    {
      value:3,
      label:"退出"
    }
  ]
  constructor(
    private commonStore:CommonStoreService,
    private router:Router,
    private headerService:HeaderService
  ) {
    this.resetUserInfo()
  }
  ngOnInit() {
    this.commonStore.userInfoUpdated.subscribe(res=>{
      this.resetUserInfo()
    })
  }
  handle(event){
    switch (event.value/1){
      // case 1:
      //   this.userInfo['loginState']==1?this.router.navigate(["/demander/projects"]):this.router.navigate(["/freelancer/projects"])
      //   break;
      case 2:
        this.headerService.changeAuth()
        break;
      case 3:
        this.headerService.logout()
        break;
      default:
        break;
    }
  }
  resetUserInfo(){
    let userinfo=this.commonStore.getUserInfo()
    this.userInfo=userinfo;
    if(userinfo['customerId']){
      this.isHome=true
    }else{
      this.isHome=false;
    }
  }

}
