import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demander-project-item',
  templateUrl: './demander-project-item.component.html',
  styleUrls: ['./demander-project-item.component.css']
})
export class DemanderProjectItemComponent implements OnInit {
  @Input() demandData:demandItem;
  constructor() { }

  ngOnInit() {
  }

}
class demandItem{
  public title:string="";
  public demand_id:string="";
  public budget_amount:string="";
  public skill_name:string="";
  public chatCount:number=0;
  public status:number=6;
  public create_time:any=new Date().getTime();
}
