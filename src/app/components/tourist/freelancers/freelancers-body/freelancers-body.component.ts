import { Component, OnInit } from '@angular/core';
import {TouristFreelancersService} from "../../../../service/touristFreelancers/tourist-freelancers.service";
import {UtilService} from "../../../../service/common/util.service";

@Component({
  selector: 'app-freelancers-body',
  templateUrl: './freelancers-body.component.html',
  styleUrls: ['./freelancers-body.component.css']
})
export class FreelancersBodyComponent implements OnInit {
  public freelancers:any[]=[];
  public page:number=1;
  public pageSize:number=10;
  public dataTotal:number=30;
  constructor(
    private touristFreelancerService:TouristFreelancersService,
    private util:UtilService
  ) { }

  ngOnInit() {
    this.getFreelancers()
  }
  pageChange(event){
    this.page=event;
    this.getFreelancers()
    this.util.resetScrollTop()
  }
  getFreelancers(){
    this.touristFreelancerService.getFreelancers(this.page,this.pageSize).then((res:any[])=>{
      this.freelancers=res;
    })
  }
}
