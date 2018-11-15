import { Component, OnInit } from '@angular/core';
import {TouristProjectsService} from "../../../../service/touristProjects/tourist-projects.service";
import {CommonStoreService} from "../../../../service/commonStore/common-store.service";
import {UtilService} from "../../../../service/common/util.service";

@Component({
  selector: 'app-freelancer-search-project-list',
  templateUrl: './freelancer-search-project-list.component.html',
  styleUrls: ['./freelancer-search-project-list.component.css']
})
export class FreelancerSearchProjectListComponent implements OnInit {
  public page:number=1;
  public pageSize:number=10;
  public dataTotal:number=30;
  public demandList:any[]=[];
  constructor(
    private freelancerProjectService:TouristProjectsService,
    private commonStore:CommonStoreService,
    private util:UtilService
  ) { }

  ngOnInit() {
    if(this.commonStore.getUserInfo()['customerId']){
      this.getProjects()
    }else{
      this.commonStore.userInfoUpdated.subscribe(res=>{
        this.getProjects()
      })
    }
  }
  pageChange(event){
    this.page=event;
    this.getProjects()
  }
  getProjects(){
    this.freelancerProjectService.getTouristProjects(this.page,this.pageSize,true).then((res:any)=>{
      this.demandList=res.data.content
      this.util.resetScrollTop()
    })
  }
}
