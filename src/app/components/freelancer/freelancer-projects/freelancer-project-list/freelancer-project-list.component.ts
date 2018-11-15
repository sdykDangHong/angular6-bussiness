import { Component, OnInit } from '@angular/core';
import {FreelancerProjectsService} from "../../../../service/freelancerProjects/freelancer-projects.service";
import {CommonStoreService} from "../../../../service/commonStore/common-store.service";
import {UtilService} from "../../../../service/common/util.service";

@Component({
  selector: 'app-freelancer-project-list',
  templateUrl: './freelancer-project-list.component.html',
  styleUrls: ['./freelancer-project-list.component.css']
})
export class FreelancerProjectListComponent implements OnInit {
  public page:number=1;
  public pageSize:number=10;
  public dataTotal:number=99999;
  public demandTitle:string="";
  public sort:number=1;
  public demandList:any[]=[];
  constructor(
    private freelancerProjectService:FreelancerProjectsService,
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
  changeSort(){
    this.sort=3-this.sort;
    this.getProjects()
  }
  pageChange(event){
    this.page=event;
    this.getProjects()
  }
  search(){
    this.page=1;
    this.sort=1;
    this.getProjects()
  }
  getProjects(){
    this.freelancerProjectService.getFreelancerProjectList(this.page,this.pageSize,this.sort,this.demandTitle).then((res:any)=>{
      this.demandList=res.list;
      this.dataTotal=res.total
      this.util.resetScrollTop()
    })
  }
}
