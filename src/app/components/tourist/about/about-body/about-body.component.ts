import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-about-body',
  templateUrl: './about-body.component.html',
  styleUrls: ['./about-body.component.css']
})
export class AboutBodyComponent implements OnInit {
  private tabSelected:number=0;
  private timeList:any[]=[
    {
      time:'2015年8月',
      content:"公司在北京成立"
    },
    {
      time:'2015年9月',
      content:"公司获得天使轮数百万人民币投资"
    },
    {
      time:'2015年10月',
      content:"公司获得IVP及天狼星资本pre-A轮2000万人民币投资"
    },
    {
      time:'2015年12月',
      content:"公司开始布局全国市场，并在上海、广州成立分公司"
    },
    {
      time:'2016年2月至4月三',
      content:"三点一刻与洪泰创新空间、优客工场、纳什空间等两百余家知名众创空间达成战略合作，同时签约速8酒店、卓越互动、网龙网络、白石山、优衣库、香港创世纪等知名企业客户"
    },
    {
      time:'2016年12月',
      content:"公司获得数千万A轮融资，并正式发布一系列新品：三点一刻APP、公众号、PC线上官网和线下移动办公"
    }
  ];
  constructor(
    private activeRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.resetTabSelected()
  }
  resetTabSelected(){
    switch(this.activeRouter.snapshot.url[0].path){
      case 'about':
        this.tabSelected=0
        break;
      case 'development':
        this.tabSelected=1
        break;
      case 'contact':
        this.tabSelected=2
        break;
      default:
        this.tabSelected=0;
        break;
    }
  }
}
