import { Component, OnInit } from '@angular/core';
import {DemandsAddService} from "../../../../service/demandsAdd/demands-add.service";

@Component({
  selector: 'app-demands-add-form',
  templateUrl: './demands-add-form.component.html',
  styleUrls: ['./demands-add-form.component.css']
})
export class DemandsAddFormComponent implements OnInit {
  public demandTitle:string="";
  public demandDate:string="";
  public serviceTagsList:any[]=[];
  public serviceTags:object;
  public demandBudget:string;
  public budgetAmountList:any[]=['1万以下','1万-3万','3万-10万','10万-30万','30万-50万','50万-100万','100万以上'];
  constructor(
    private demandsAddService:DemandsAddService
  ) { }

  ngOnInit() {
    this.getServiceTags()
  }
  getServiceTags(){
    this.demandsAddService.getServiceTags().then((res:any[])=>{
      let arr=[];
      res.map((item,index)=>{
        let children=[];
        item.list.map((item,index)=>{
          children.push({
            label:item.tagName,
            value:index,
            isLeaf: true
          })
        })
        arr.push({
          value:index,
          label:item.tagName,
          children:children
        })
      })
      this.serviceTagsList=arr;
    })
  }
}
