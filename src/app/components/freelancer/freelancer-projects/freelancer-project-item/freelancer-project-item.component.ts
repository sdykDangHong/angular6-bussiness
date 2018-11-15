import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-freelancer-project-item',
  templateUrl: './freelancer-project-item.component.html',
  styleUrls: ['./freelancer-project-item.component.css']
})
export class FreelancerProjectItemComponent implements OnInit {
  @Input() demandData:demandItem;
  constructor() { }

  ngOnInit() {
  }

}
class demandItem{
  public title:string="";
  public demandId:string="";
  public projectTotalAmount:string="";
  public tagName:string="";
  public chatCount:number=0;
  public status:number=6;
  public createTime:any=new Date().getTime();
}
