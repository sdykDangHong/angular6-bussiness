import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tourist-project-item',
  templateUrl: './tourist-project-item.component.html',
  styleUrls: ['./tourist-project-item.component.css']
})
export class TouristProjectItemComponent implements OnInit {
  @Input() public demandData:demandItem;
  @Input() public isFirst:boolean=false;
  constructor() { }
  ngOnInit(){
  }
}
class demandItem {
  public demand_id:string="";
  public title:string="";
  public insert_time:string="";
  public city:string="暂无";
  public budget_range:string="不限";
}

