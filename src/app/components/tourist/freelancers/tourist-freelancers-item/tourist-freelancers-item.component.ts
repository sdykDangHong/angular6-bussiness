import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tourist-freelancers-item',
  templateUrl: './tourist-freelancers-item.component.html',
  styleUrls: ['./tourist-freelancers-item.component.css']
})
export class TouristFreelancersItemComponent implements OnInit {
  @Input() isFirst:boolean=false;
  @Input() freelancerItem:FreelancerItem;
  constructor() { }
  ngOnInit() {
  }

}
class FreelancerItem{
  private nick:string="";
  private headerpic:string="";
  private info_score:number=0;
  private skills:any[]=[];
}
