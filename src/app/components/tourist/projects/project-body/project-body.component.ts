import { Component, OnInit } from '@angular/core';
import {TouristProjectsService} from "../../../../service/touristProjects/tourist-projects.service";
import {UtilService} from "../../../../service/common/util.service";

@Component({
  selector: 'app-project-body',
  templateUrl: './project-body.component.html',
  styleUrls: ['./project-body.component.css']
})
export class ProjectBodyComponent implements OnInit {
  public demandList:any[]=[];
  public page:number=1;
  public pageSize:number=10;
  public dataTotal:number=30;
  constructor(
    private projectService:TouristProjectsService,
    private util:UtilService
  ) { }

  ngOnInit() {
    this.getDemandList()
  }
  pageChange(event){
    this.page=event;
    this.getDemandList()
    this.util.resetScrollTop()
  }
  getDemandList(){
    this.projectService.getTouristProjects(this.page,this.pageSize).then((res:any)=>{
      this.demandList=res.data.content
    })
  }
}
