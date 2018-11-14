import { Component, OnInit } from '@angular/core';
import {DemanderProjectsService} from "../../../../service/demanderProjects/demander-projects.service";
import {CommonStoreService} from "../../../../service/commonStore/common-store.service";
import {UtilService} from "../../../../service/common/util.service";

@Component({
  selector: 'app-demander-project-list',
  templateUrl: './demander-project-list.component.html',
  styleUrls: ['./demander-project-list.component.css']
})
export class DemanderProjectListComponent implements OnInit {
  public dataTotal:number=99999;
  public page:number=1;
  public pageSize:number=10;
  public sort:number=1;
  public demandList:any[]=[];
  constructor(
    private demanderProject:DemanderProjectsService,
    private commonStore:CommonStoreService,
    private util:UtilService
  ) { }

  ngOnInit() {
    if(this.commonStore.getUserInfo()['customerId']){
      this.getDemandList()
    }else{
      this.commonStore.userInfoUpdated.subscribe(res=>{
        this.getDemandList()
      })
    }
  }
  pageChange(event){
    this.page=event
    this.getDemandList()
  }
  getDemandList(){
    this.demanderProject.getDemandList(this.page,this.pageSize,this.sort).then((res:any)=>{
      this.demandList=res.list;
      this.dataTotal=res.total;
      this.util.resetScrollTop()
    })
  }
  changeSort(){
    this.page=1;
    this.sort=3-this.sort;
    this.getDemandList()
  }
  demandWordSearch(){

  }
}
